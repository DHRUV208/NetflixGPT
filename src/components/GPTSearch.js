import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMAGE} alt="background image" />
      </div>
      <GPTSearchBar />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
