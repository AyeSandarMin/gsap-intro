import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin();

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
