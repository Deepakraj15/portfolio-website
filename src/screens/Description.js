import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import GlowingCursor from '../components/GlowingCursor.js';
import { useState, useMemo, useCallback } from 'react';

const Description = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const description =
    "I'm a Software Engineer focused on building robust, scalable solutions that drive real impact. I work primarily with Java (8 & 21), Spring Boot, React.js, MySQL, and Shell scripting—bringing full-stack applications to life. Whether it's backend services, intuitive frontends, or R&D to explore new tech directions, I enjoy solving complex problems and turning ideas into reliable software. I'm always learning, iterating, and looking for ways to level up my craft. When I'm not writing code, you'll likely find me diving into chess strategies or contributing to open-source projects. Let's connect and create something meaningful together!";

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const descriptionChars = useMemo(() => description.split(""), [description]);

  const contactLinks = useMemo(() => [
    { href: "https://github.com/Deepakraj15", title: "Github", icon: GitHubIcon },
    { href: "https://www.linkedin.com/in/deepakraj-k/", title: "LinkedIn", icon: LinkedInIcon },
    { href: "", title: "Instagram", icon: InstagramIcon },
    { href: "", title: "Whatsapp", icon: WhatsAppIcon },
  ], []);

  const renderContactLinks = useCallback(() =>
    contactLinks.map(({ href, title, icon: Icon }, index) => (
      <a key={index} title={title} href={href}>
        <Icon className="contact-icon" sx={{ fontSize: 45 }} />
      </a>
    )), [contactLinks]);

  return (
    <div className="description w-full h-screen items-end section z-10">
      {/* {isBulbOn && <GlowingCursor />} */}
      <NavBar isBulbOn={isBulbOn} setIsBulbOn={setIsBulbOn} />

      <div className="content-cont z-10 absolute left-0 bottom-0 w-9/12 h-4/6">
        <div className="content">
          <p className="tracking-widest uppercase">
            A Software Engineer
            <br />
            <span className="second-text">based in India</span>
          </p>

          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="personal-info"
          >
            {descriptionChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <br />
        <div className="link absolute bottom-0">
          <a href="#sectio1">More about me &gt;</a>
        </div>
      </div>

      <motion.div
        transition={{ delay: 1 }}
        initial={{ right: -53 }}
        whileInView={{ right: 0 }}
        className="side-contact-list flex flex-col absolute mt-16 gap-4 p-1"
      >
        {renderContactLinks()}
      </motion.div>
    </div>
  );
};

export default Description;
