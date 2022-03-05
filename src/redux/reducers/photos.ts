import { createSlice } from "@reduxjs/toolkit";

// Photos slice...
const photos = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
  },
});

// Action creators...
const { setPhotos } = photos.actions;
const photosReducer = photos.reducer;

// Export...
export { setPhotos, photosReducer };
