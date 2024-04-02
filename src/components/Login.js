import { useState } from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInform = () => {
        setIsSignInForm(!isSignInForm);
    } 

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background image" />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
        {isSignInForm ? "New to Netflix? Sign up Now" : "Already a user? Sign in Now"}
      </p>
      </form>
      
    </div>
  );
};

export default Login;
