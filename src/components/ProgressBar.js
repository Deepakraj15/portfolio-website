
import { motion,useScroll } from "framer-motion";
const Progressbar = () => {
 
 const { scrollYProgress } = useScroll();
  
  return (
    <motion.div className="progress-bar z-50"  style={{ scaleX: scrollYProgress }} />  
    )
}
export default Progressbar;