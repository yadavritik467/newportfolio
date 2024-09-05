import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const App = () => {
  return (
    <div className="w-full h-[100vh] pb-0  scroll-smooth overflow-x-hidden  overflow-scroll">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
