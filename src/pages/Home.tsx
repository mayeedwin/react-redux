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
import { connect } from "react-redux";

// Message component...
const Message = ({
  message,
  photos,
}: {
  message: string;
  photos: {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
}) => {
  return (
    <h1 className="message">
      {message} ({photos.length})
    </h1>
  );
};

// Map component...
const mapStateToProps = (
  state: {
    photos: {
      data: {
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      }[];
    };
  },
  ownState: {
    message: string;
  }
) => {
  return {
    photos: state.photos.data,
    ...ownState,
  };
};

const MessageComponent = connect(mapStateToProps)(Message);

const HomePage = () => {
  // State...
  const { photos, count } = useAppSelector((state) => {
    return {
      photos: state.photos.data,
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
        <MessageComponent message="Welcome to the Photo Gallery!" />
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
