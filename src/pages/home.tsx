import { Link } from "react-router-dom";
import { decrement, increment, useAppDispatch, useAppSelector } from "../redux";
import { Message } from "../components";

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
        <Message message="Welcome to the Photo Gallery!" />
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
