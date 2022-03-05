import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterReducer, increment, decrement } from "./reducers/counter";
import { photosReducer, setPhotos } from "./reducers/photos";
// Redux store...
const store = configureStore({
  reducer: {
    counter: counterReducer,
    photos: photosReducer,
  },
});

// Root types...
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export root hooks...
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Exports...
export {
  store,
  useAppDispatch,
  useAppSelector,
  increment,
  decrement,
  setPhotos,
};
