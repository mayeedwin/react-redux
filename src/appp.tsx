import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import { setPhotos, useAppDispatch } from "./redux";

const App = () => {
  const dispatch = useAppDispatch();
  // Effects...
  useEffect(() => {
    // Fetches photos from an API, or other source...
    // Photos are stored in the Redux store...
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        dispatch(setPhotos(response.data.slice(0, 25)));
      })
      .catch((error) => {
        // Handle error...
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
