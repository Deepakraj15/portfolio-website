import { motion } from 'framer-motion';
import TimeLine from '../components/TimeLine';
const Experience = () => {
    return (
        <motion.div className="skills w-full h-screen section flex flex-col gap-5" id="section1">
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 place-items-center gap-4">
                {/* Heading Section */}
                <div className="col-start-1 row-start-1 row-span-2 w-full h-full center">
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: 0 }}
                        className="heading w-full m-10"
                    >
                        My Experience
                        <p className="sub-heading">Things that I have done.</p>
                    </motion.div>
                </div>
                <TimeLine/>
            </div>
        </motion.div>
    )
}

export default Experience