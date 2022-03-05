import { Link } from "react-router-dom";
import { useAppSelector } from "../redux";

const AboutPage = () => {
  // Redux state...
  const { count, photos } = useAppSelector((state) => {
    return {
      count: state.counter.count,
      photos: state.photos.photos.length,
    };
  });
  return (
    <section className="about-page">
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
        <p>
          This is the TodoList app v1.0.0. It is part of a React crash course
        </p>
        <p>Testing redux count : {count}</p>
        <p>Number of photos loaded : {[photos]}</p>
      </div>
    </section>
  );
};

export default AboutPage;
