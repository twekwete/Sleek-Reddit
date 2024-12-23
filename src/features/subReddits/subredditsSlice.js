import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatDistanceToNow } from 'date-fns';

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
    searchTerm: ""
  },
  reducers: {
    setSearchTerm: (state,action) => {
      state.searchTerm = action.payload;
    }
  },
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
export const selectSubreddit = (state) => {
  const filteredSubRedditData = [];
  const SubRedditLoadedData = state.subreddit.subreddit.data?.children || [];

  console.log("SubRedditLoadedData>>>>>",SubRedditLoadedData)

  SubRedditLoadedData?.forEach((element) => {
    let highQualityImage = '';
  
    // Handle gallery posts
    if (element.data.media_metadata) {
      const firstImageKey = Object.keys(element.data.media_metadata)[0];
      highQualityImage = element.data.media_metadata[firstImageKey]?.s?.url;
    }
    // Handle regular posts with previews
    else if (element.data.preview?.images[0]?.source?.url) {
      highQualityImage = element.data.preview.images[0].source.url;
    }
    // Fallback to thumbnail if no other options
    else {
      highQualityImage = element.data.thumbnail;
    }
  
    // Remove HTML encoding from URLs
    if (highQualityImage) {
      highQualityImage = highQualityImage.replace(/&amp;/g, '&');
    }
  
    const subRedditPostRequiredFields = {
      id: element.data.title,
      title: element.data.title,
      author: element.data.author,
      thumbnail: highQualityImage,
      upVotes: element.data.ups || 0,
      createdDate: formatDistanceToNow(new Date(element.data.created_utc * 1000)),
      url: element.data.permalink,
      commentsCount: element.data.num_comments || 0,
    };

    const searchTerm = state.subreddit.searchTerm;

    if(searchTerm){
      if(subRedditPostRequiredFields.title.includes(searchTerm))  filteredSubRedditData.push(subRedditPostRequiredFields);
      return;
    }

    filteredSubRedditData.push(subRedditPostRequiredFields)
  });

  return filteredSubRedditData;
};
export const selectLoading = (state) => state.subreddit.isLoading;
export const selectError = (state) => state.subreddit.hasError;
export const {setSearchTerm} = subredditSlice.actions;