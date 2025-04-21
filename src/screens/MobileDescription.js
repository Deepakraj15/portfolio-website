import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import GlowingCursor from '../components/GlowingCursor.js';
import { useState, useMemo, useCallback } from 'react';

const MobileDescription = () => {
    const [isBulbOn, setIsBulbOn] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 },
    };


    const contactLinks = useMemo(() => [
        { href: "https://github.com/Deepakraj15", title: "Github", icon: GitHubIcon },
        { href: "https://www.linkedin.com/in/deepakraj-k/", title: "LinkedIn", icon: LinkedInIcon },
        { href: "", title: "Instagram", icon: InstagramIcon },
        { href: "", title: "Whatsapp", icon: WhatsAppIcon },
    ], []);

    const renderContactLinks = useCallback(() =>
        contactLinks.map(({ href, title, icon: Icon }, index) => (
            <a key={index} title={title} href={href} target="_blank" rel="noreferrer">
                <Icon className="contact-icon text-white hover:text-yellow-400 transition-all" sx={{ fontSize: 35 }} />
            </a>
        )), [contactLinks]);

    return (
        <div className="description w-full h-screen items-end section z-10 relative bg-black text-white">
            {/* Optional glowing cursor for desktop */}
            {isBulbOn && <GlowingCursor className="hidden sm:block" />}

            <NavBar isBulbOn={isBulbOn} setIsBulbOn={setIsBulbOn} />

            <div className="content-cont z-10 absolute left-0 bottom-0 w-full sm:w-10/12 p-4 sm:p-10">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-5xl font-bold"
                >
                    DeepakrajK
                </motion.h1>

                <p className="content-cont tracking-widest uppercase text-md sm:text-lg mt-2">
                    A Software Engineer<br />
                    <span className="second-text text-yellow-400">based in India</span>
                </p>
                <div className="content-cont z-10 absolute left-0 bottom-0 w-9/12 h-4/6">
                    <div className="link absolute bottom-0">
                        <a href="#sectio1">More about me &gt;</a>
                    </div>
                </div>
            </div>

            {/* Desktop side contacts */}
            <motion.div
                transition={{ delay: 1 }}
                initial={{ right: -53 }}
                whileInView={{ right: 0 }}
                className="hidden sm:flex side-contact-list flex-col fixed right-2 top-1/3 gap-4 p-1 z-20"
            >
                {renderContactLinks()}
            </motion.div>

            {/* Mobile contact links below content */}
            <div className="sm:hidden flex justify-center items-center mt-6 space-x-4">
                {renderContactLinks()}
            </div>
        </div>
    );
};

export default MobileDescription;
