// import Cookies from "js-cookie";
import { Link } from "@tanstack/react-router";
import study from "../assets/im1.svg";
import study2 from "../assets/im2.svg";
const Home = () => {
  return (
    <section id="home">
      <article id="md1">
        <div className="hm-block-text">
          <h1>Challenge Your Mind...</h1>
          <p>
            Dive into a world of quizzes that spark curiosity and fuel
            knowledge. Unleash your intellect and discover the thrill of
            self-discovery. Ready to test your knowledge?{" "}
            <strong>
              <Link to="#md2">Let's begin!</Link>
            </strong>
          </p>
        </div>
        <img src={study} alt="study" className="hm-block-img" />
      </article>
      <article id="md2">
        <img src={study2} alt="study2" className="hm-block-img" />
        <div className="hm-block-text">
          <h1>Which Test Should I take...</h1>
          <p>
            Take your pick! We offer subject-based tests for focused learning
            and topic-based tests for a broader challenge. Which one suits you
            best?
          </p>
          <div className="md2-btns">
            <button>Subjetcs</button>
            <button>Topics</button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Home;
