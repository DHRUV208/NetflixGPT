import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="background image" />
      </div>
      <GPTSearchBar />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
