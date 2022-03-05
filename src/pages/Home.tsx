import { useEffect } from "react";
import axios from "axios";
import {
  decrement,
  increment,
  setPhotos,
  useAppDispatch,
  useAppSelector,
} from "../redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  // State...
  const { photos, count } = useAppSelector((state) => {
    return {
      photos: state.photos.photos,
      count: state.counter.count,
    };
  });

  // Dispatch...
  const dispatch = useAppDispatch();

  // Handle button click...
  const handleClick = (event: any, type = "increment") => {
    event.preventDefault();
    type === "increment" ? dispatch(increment()) : dispatch(decrement());
  };

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

  useEffect(() => {
    //...
    if (photos) {
      console.log(photos);
    }
  }, [photos]);

  return (
    <section className="home-page">
      <h1>Redux Counter : {count}</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div className="redux-btns">
        <button
          className="redux-btn"
          onClick={(event) => handleClick(event, "increment")}>
          Increment
        </button>
        <button
          className="redux-btn"
          onClick={(event) => handleClick(event, "decrement")}>
          Decrement
        </button>
      </div>
      <section>
        <h2>Photos</h2>
        <section className="photos">
          {" "}
          {photos &&
            photos.map(
              (photo: {
                id: number;
                title: string;
                url: string;
                thumbnailUrl: string;
              }) => {
                return (
                  <div key={photo.id} className="photo">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                  </div>
                );
              }
            )}
        </section>
      </section>
    </section>
  );
};

export default HomePage;
