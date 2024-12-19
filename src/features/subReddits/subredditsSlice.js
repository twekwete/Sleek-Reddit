import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubReddit = createAsyncThunk(
  "subreddit/fetchSubReddit",
  async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      return json;
    } catch (err) {
      return err;
    }
  }
);

const options = {
  name: "subreddit",
  initialState: {
    subreddit: {},
    isLoading: false,
    hasError: false,
  },
  reducers : {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubReddit.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchSubReddit.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSubReddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subreddit = action.payload;
      });
  },
};

export const subredditSlice = createSlice(options);
export default subredditSlice.reducer;
export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectLoading = (state) => state.subreddit.isLoading;
export const selectError = (state) => state.subreddit.hasError;
