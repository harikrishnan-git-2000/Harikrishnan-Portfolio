import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./sections/Footer.jsx";
import AboutMe from "./sections/AboutMe.jsx";



const App = () => {
    return (
       <>
       <NavBar/>
       <Hero />
       <AboutMe />
       <TechStack />
       <ShowcaseSection />
       <ExperienceSection />
       <ContactSection />
       <Footer />
       </>
    )
}
export default App
