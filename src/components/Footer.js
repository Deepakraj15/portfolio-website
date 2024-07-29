import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <div className="w-full h-screen section grid grid-rows-2">
            <div className="w-100"></div>
            <footer className="w-100">
                <h1 className="credits">Deepakraj K</h1>
                <div className="link-resume">
                    <a href="/DeepakrajK_Resume.pdf" download>
                        Download my resume
                    </a>
                </div>
                <div className='contact-footer flex flex-col gap-3'>
                    <span><PlaceIcon sx={{ fontSize: 25}} /> Chennai</span>
                    
                   <span> <LocalPhoneIcon sx={{ fontSize: 25 }} /> +91 9344695977</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
