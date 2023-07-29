import Home from "@/app/Home/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Project from "./Projects/page";
import Contact from "./Contact/page";
import Footer from "./footer/page";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
