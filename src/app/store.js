import { configureStore } from "@reduxjs/toolkit";
import subredditSliceReducer from "../features/subReddits/subredditsSlice";

export default configureStore({
  reducer: {
    subreddit: subredditSliceReducer,
  },
});
