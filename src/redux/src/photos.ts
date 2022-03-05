import { createSlice } from "@reduxjs/toolkit";

// Photos slice...
const photos = createSlice({
  name: "photos",
  initialState: {
    data: [],
  },
  reducers: {
    setPhotos: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators...
const { setPhotos } = photos.actions;
const photosReducer = photos.reducer;

// Export...
export { setPhotos, photosReducer };
