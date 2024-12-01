import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
    filteredMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
    filteredMovies: (state, action) => {
      state.filteredMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos, filteredMovies } =
  moviesSlices.actions;
export default moviesSlices.reducer;
