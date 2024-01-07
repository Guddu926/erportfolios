import Hero from "./hero";
import About from "../about";
import Project from "../project";
import Skill from "../skill";
import Contacts from "../contact";
import Portfolio from "../portfolios";

const Home = () => {
  return (
    <div>
      <Hero />
       <About />
       <Skill />
       <Project /> 
       <Contacts /> 
    </div>
  );
};

export default Home;
