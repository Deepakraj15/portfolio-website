import { motion } from 'framer-motion';
import EngineeringIcon from "@mui/icons-material/Engineering";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import IconList from "../components/IconList.js";

// Data for skills
const skillsData = [
  {
    title: "Engineering",
    icon: <EngineeringIcon sx={{ fontSize: 50 }} />,
    content: `My engineering background enables me to apply robust methodologies
      throughout product development, ensuring precision from deployment
      to optimization. Leveraging expertise in systems engineering and
      scalable architecture, I deliver technically sound, user-friendly,
      market-ready solutions.`,
    position: { col: 2, row: 1 },
    animation: { x: '150%' },
  },
  {
    title: "Product Design",
    icon: <BrushIcon sx={{ fontSize: 50 }} />,
    content: `I excel in problem-solving and applying design concepts to create
      innovative solutions. Leveraging my expertise in systems engineering
      and user-centered design, I craft products that are efficient,
      intuitive, and market-ready.`,
    position: { col: 3, row: 1 },
    animation: { y: '150%' },
  },
  {
    title: "Programming",
    icon: <CodeIcon sx={{ fontSize: 50 }} />,
    content: `With 4 years of coding experience during university, I have
      developed a versatile skill set to tackle diverse challenges. My
      expertise spans various technologies, enabling me to create
      innovative, user-friendly, and technically sound solutions.`,
    position: { col: 2, row: 2 },
    animation: { y: '-150%' },
  },
  {
    title: "Communication",
    icon: <RecordVoiceOverIcon sx={{ fontSize: 50 }} />,
    content: `I specialize in translating complex ideas into clear and effective
      communication. This ability fosters collaboration and ensures
      alignment among team members, stakeholders, and clients.`,
    position: { col: 3, row: 2 },
    animation: { x: '-150%' },
  },
];

const SkillCard = ({ title, icon, content, animation, col, row }) => (
  <motion.div
    initial={animation}
    whileInView={{ x: 0, y: 0 }}
    whileHover={{ x: -10, y: 10 }}
    transition={{ ease: 'easeInOut' }}
    className={`skill w-full h-full col-start-${col} row-start-${row} flex-col center`}
  >
    <div className="skill-card w-full h-3/6 center">
      {icon}
      <p className="skill-icon-heading">{title}</p>
    </div>
    <div className="w-full h-3/6 skill-content">{content}</div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.div className="skills w-full h-screen section flex flex-col gap-5" id="section2">
      <div className="w-full h-5/6 grid grid-cols-3 grid-rows-2 place-items-center gap-4">
        {/* Heading Section */}
        <div className="col-start-1 row-start-1 row-span-2 w-full h-full center">
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            className="heading w-full m-10"
          >
            My Skills
            <p className="sub-heading">Things that I have gained.</p>
          </motion.div>
        </div>

        {/* Skill Cards */}
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            content={skill.content}
            animation={skill.animation}
            col={skill.position.col}
            row={skill.position.row}
          />
        ))}
      </div>
      <IconList />
    </motion.div>
  );
};

export default Skills;
