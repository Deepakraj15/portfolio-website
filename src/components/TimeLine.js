import { Work, School, Star } from "@mui/icons-material";
import { motion } from "framer-motion";
const steps = [
    {
        label: "Software Engineer- R&D",
        YOE: "(2024 - Present)",
        company: "Tejas Networks",
        description: [
            "Building scalable backend services with Java, Spring Boot, and MySQL.",
            "Contributed to React-based frontend.",
            "Worked on the reports module and resolved field-related issues to ensure smooth production performance.",
            "Handled build management tasks to support timely delivery.",
            "Implemented caching mechanisms for improved performance.",
            "Contributed to a UI revamp initiative.",
            "Optimized server-side database queries and worked with Hibernate for efficient data handling."
        ],
        icon: <Work sx={{ fontSize: 28, color: "white" }} />,
    },
    {
        label: "CSE Undergraduate",
        YOE: "(2020 - 2024)",
        company: "Rajalakshmi Engineering College",
        description: [
            "Completed Computer Science Engineering degree with a CGPA of 9.56.",
            "Built multiple software projects.",
            "Learnt core engineering and design concepts.",
            "Organized technical events and served as Chairman of the ACM student chapter.",
            "Actively participated in national and international conferences."
        ],
        icon: <School sx={{ fontSize: 28, color: "white" }} />,
    },
];

const TimeLine = () => {
    return (
        <motion.div
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            className="col-start-2 col-span-2 row-span-2 w-full h-full flex justify-center flex-col">
            <div style={{ borderRadius: '10px' }} className="h-[80%] bg-[#181823] p-10 w-3/4 center">
                <div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-12 flex items-start"
                            initial={{ opacity: 0, y: '100%' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.3, ease: "easeOut" }}
                        >
                            {/* Icon Container */}
                            <div className="absolute left-0 z-10 rounded-full p-1 shadow-md">
                                {step.icon}
                            </div>

                            {/* Step Content */}
                            <div className="ml-10">
                                <h3 className="font-fam text-2xl font-extrabold tracking-wide text-white">
                                    {step.label}
                                </h3>
                                <p className="text-lg font-bold text-white italic">{step.company}</p>
                                <p className="text-sm text-red-700 font-bold">{step.YOE}</p>

                                <div className="ml-1 mt-2 space-y-2">
                                    {step.description.map((point, i) => (
                                        <div key={i} className="flex items-start space-x-2">
                                            <Star sx={{ fontSize: 14, color: "#facc15", mt: "3px" }} />
                                            <p className="text-sm font-medium text-[#758ecd]">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </motion.div>
    );
};

export default TimeLine;
