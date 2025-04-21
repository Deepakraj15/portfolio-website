
import Description from "./Description.js";
import Skills from "./Skills.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import Footer from "../components/Footer.js";
import Experience from "./Experience.js";


const Main = () => {
    return (
        <main>
            <Description />
            <Experience />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}
export default Main;