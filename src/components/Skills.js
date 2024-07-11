import EngineeringIcon from "@mui/icons-material/Engineering";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import IconList from "./IconList.js";
const Skills = () => {
  return (
    <div className="skills w-full h-screen section flex flex-col gap-5 ">
      <div className="w-full h-5/6 grid grid-cols-3 grid-rows-2 place-items-center gap-4 ">
        <div className=" col-start-1 row-start-1 row-span-2 w-full h-full center">
          <div className="heading w-100 m-10">
            My Skills
            <p className="sub-heading">Things that I have gained.</p>
          </div>
        </div>
        <div className="skill w-full h-full col-start-2 row-start-1  flex-col center">
          <div className="w-full h-3/6 center">
            <EngineeringIcon className="skill-icon" sx={{ fontSize: 50 }} />
            <p className="skill-icon-heading">Engineering</p>
          </div>
          <div className="w-full h-3/6 skill-content">
            My engineering background enables me to apply robust methodologies
            throughout product development, ensuring precision from deployment
            to optimization. Leveraging expertise in systems engineering and
            scalable architecture, I deliver technically sound, user-friendly,
            market-ready solutions.
          </div>
        </div>
        <div className="skill w-full h-full col-start-3 row-start-1  flex-col center">
          <div className="w-full h-3/6 center">
            <BrushIcon className="skill-icon" sx={{ fontSize: 50 }} />
            <p className="skill-icon-heading">Product Design</p>
          </div>
          <div className="w-full h-3/6 skill-content">
            I excel in problem-solving and applying design concepts to create
            innovative solutions. Leveraging my expertise in systems engineering
            and user-centered design, I craft products that are efficient,
            intuitive, and market-ready.
          </div>
        </div>
        <div className="skill w-full h-full col-start-2 row-start-2  flex-col center">
          <div className="w-full h-3/6 center">
            <CodeIcon className="skill-icon" sx={{ fontSize: 50 }} />
            <p className="skill-icon-heading">Programming</p>
          </div>
          <div className="w-full h-3/6 skill-content">
            With 4 years of coding experience during university, I have
            developed a versatile skill set to tackle diverse challenges. My
            expertise spans various technologies, enabling me to create
            innovative, user-friendly, and technically sound solutions. My
            commitment to quality and robust programming skills ensure
            excellence in every project.
          </div>
        </div>
        <div className="skill w-full h-full col-start-3 row-start-2  flex-col center">
          <div className="w-full h-3/6 center">
            <RecordVoiceOverIcon className="skill-icon" sx={{ fontSize: 50 }} />
            <p className="skill-icon-heading">Communication</p>
          </div>
          <div className="w-full h-3/6 skill-content">
            I specialize in translating complex ideas into clear and effective
            communication. This ability fosters collaboration and ensures
            alignment among team members, stakeholders, and clients, leading to
            successful project outcomes.
          </div>
        </div>
      </div>
      <IconList />
    </div>
  );
};

export default Skills;
