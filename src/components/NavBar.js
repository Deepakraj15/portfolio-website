import { motion } from 'framer-motion';
import { usePlatform } from '../hooks/usePlatform.js';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ isBulbOn, setIsBulbOn }) => {
  const isMobileView = usePlatform();
  const toggleBulb = () => setIsBulbOn(!isBulbOn);

  return (
    <div className="nav-bar w-full h-1/6 z-20 grid grid-cols-10 sm:grid-cols-5">
      {!isMobileView &&  <motion.div
        initial={{ x: '-100%'}}
        whileInView={{ x: '0%' }}
        className="nav-name col-span-2 sm:col-span-2 col-start-1 sm:col-start-1 center flex items-center gap-2 pl-4"
      >
        Deepakraj K
        {/* <div
          onClick={toggleBulb}
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-yellow-400 transition-all duration-300 cursor-pointer ${
            isBulbOn
              ? 'bg-yellow-300 shadow-[0_0_20px_8px_rgba(253,224,71,0.5)]'
              : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full mx-auto mt-[3px] ${
              isBulbOn ? 'bg-yellow-500' : 'bg-gray-500'
            }`}
          ></div>
        </div> */}
      </motion.div>}
     
       <ScrollLink
        className="nav col-start-7 sm:col-start-2 center block w-full h-full"
        to="section1"
        smooth={true}
        duration={500}
      >
        Experience
      </ScrollLink>
      <ScrollLink
        className="nav center block w-full h-full"
        to="section2"
        smooth={true}
        duration={500}
      >
        Skills
      </ScrollLink>
      <ScrollLink
        className="nav center block w-full h-full"
        to="section3"
        smooth={true}
        duration={500}
      >
        Projects
      </ScrollLink>
      <ScrollLink
        className="nav center block w-full h-full"
        to="section4"
        smooth={true}
        duration={500}
      >
        Contact
      </ScrollLink>
    </div>
  );
};

export default NavBar;
