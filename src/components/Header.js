import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { toggleGPTSearchView } from "../utils/slices/gptSlice";
import { changeLanguage } from "../utils/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => [
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      }),
  ];

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 background bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 text-white bg-purple-800 font-medium rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="photoURL" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
