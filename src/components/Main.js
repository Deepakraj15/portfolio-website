import Heading from "./Heading.js";
import Description from "./Description.js";
import Skills from "./Skills.js";
import Project from "./Project.js";
const Main = () => {
    return (
        /*
        section 1 - name
        section 2 - description
        section 3- project
        section 4 - contact
        */
        
        <main>
            {/* <Heading /> */}
            <Description />
            <Skills />
            <Project/>
        </main>
    )
}
export default Main;