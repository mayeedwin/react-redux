import { Link, useNavigate } from "react-router-dom";
import { Button, Message } from "../components";
import { useAppSelector } from "../redux";

const AboutPage = () => {
  // Router...
  const navigate = useNavigate()
  // Redux state...
  const { count, photos } = useAppSelector((state) => {
    return {
      count: state.counter.count,
      photos: state.photos.data.length,
    };
  });
  return (
    <section className="about-page">
     <section>
     <Message message="About Page" />
        <Link to="/">Home</Link>
        <p>Testing redux count : {count}</p>
        <p>Number of photos loaded : {[photos]}</p>
     </section>
     <section>
       <Button onClick={() => navigate('/')}>
          <Link to="/about">About</Link>
       </Button>
     </section>
    </section>
  );
};

export default AboutPage;
