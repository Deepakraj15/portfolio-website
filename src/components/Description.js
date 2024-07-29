import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
 
import { Link as ScrollLink } from 'react-scroll';

const Description = () => {

  

  const description =
    "An Engineer with expertise in coding languages like C/C++, Java, Python, and JavaScript, along with skills in cloud computing, automation, and ethical hacking. I'm passionate about exploring new opportunities and continuously expanding my knowledge. When I'm not engineering solutions, I enjoy playing chess and contributing to open-source projects. Let's connect and build something awesome together!";
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    
      <div className="description w-full h-screen items-end section z-10">
        <div className="nav-bar w-full h-1/6 z-20 grid grid-cols-10 sm:grid-cols-5">
          <motion.div
            initial={{ x: -300,scale:1 }}
             whileInView={{x:0,scale:1.3}}
            className="nav-name col-span-2 sm:col-span-2 col-start-1 sm:col-start-1   center block w-full h-full"
          >
            Deepakraj K
        </motion.div>
            <ScrollLink className="nav col-start-8  sm:col-start-3 center block w-full h-full" to="section1" smooth={true} duration={500}>
                        
            Skills
        </ScrollLink>
          <ScrollLink  className="nav center block w-full h-full" to="section2" smooth={true} duration={500}>
                       
                    
      
            Projects
     </ScrollLink>
  <ScrollLink className="nav center block w-full h-full" to="section3" smooth={true} duration={500}>
                         Contact
                    </ScrollLink>
          
          
          
        </div>
        <div className=" content-cont z-10 absolute left-0 bottom-0 w-9/12 h-4/6">
          <div className="content">
            <p className="tracking-widest uppercase">
              A Software Engineer
              <br />
              <span className="second-text">based in India</span>
            </p>
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{staggerChildren:0.02}}
              className="personal-info"
            >
              {description.split("").map((char,index) => (
                <motion.span
                
                  key={index}
                  transition={{ duration: 0.5}}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <br />
        <div
         
          className="link absolute bottom-0 ">
            <a href="#">More about me &gt;</a>
          </div>
        </div>
        <motion.div
          transition={{ delay: 1 }}
          initial={{ right: -53 }}
          whileInView={{ right: 0 }}
          className="side-contact-list flex flex-col absolute mt-16 gap-4 p-1"
        >
          <a title='Github' href="https://github.com/Deepakraj15"><GitHubIcon className="contact-icon" sx={{ fontSize: 45 }} /></a>
          <a  title='LinkedIn' href="https://www.linkedin.com/in/deepakraj-k/"><LinkedInIcon className="contact-icon" sx={{ fontSize: 45 }} /></a>
          <a title='Instagram' href=""><InstagramIcon className="contact-icon" sx={{ fontSize: 45 }} /></a>
          <a title ='Whatsapp' href=""><WhatsAppIcon className="contact-icon" sx={{ fontSize: 45 }} /></a>
        </motion.div>
      </div>
 
  );
};

export default Description;
