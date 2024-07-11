import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Description = () => {
  const description =
    "An Engineer with expertise in coding languages like C/C++, Java, Python, and JavaScript, along with skills cloud computing, automation, and ethical hacking. I'm passionate about exploring new opportunities and continuously expanding my knowledge. When I'm not engineering solutions, I enjoy playing chess and contributing to open-source projects. Let's connect and build something awesome together !";
  return (
    <>
      <div className="description w-full h-screen  items-end section z-10">
              <div className="nav-bar w-full h-1/6 z-20 grid grid-cols-10">
        <div className=" nav-name col-span-2 col-start-1 center block w-full h-full">Deepakraj K </div>
          <a href="#" className="nav col-start-8 center block w-full h-full">
           Skills
          </a>
          
          <a href="#" className="nav center block w-full h-full">
            Projects
          </a>
          <a href="#" className="nav center block w-full h-full">
            Contact
          </a>
        </div>
        <div className=" z-10 absolute left-0 bottom-0 w-9/12 h-4/6">
          <div className="content ">
            <p className="tracking-widest uppercase ">
              A Software Engineer
              <br />
             <span className="second-text">based in India</span>
            </p>

            <p className="personal-info ">" {description} " </p>
          </div>
          <br />
          <div className="link absolute bottom-0">
            <a href="#"> More about me &gt;</a>
          </div>
              </div>
              <div className="side-contact-list flex flex-col absolute right-0 w-12  mt-16 gap-4 p-1">
                  <a href=""><GitHubIcon className="contact-icon" sx={{fontSize:45}}/></a>
                  <a href=""><LinkedInIcon className="contact-icon" sx={{fontSize:45}}/></a>
                  <a href=""><InstagramIcon className="contact-icon" sx={{fontSize:45}}/></a>
                  <a href=""><WhatsAppIcon className="contact-icon" sx={{fontSize:45}}/></a>
            </div>
      </div>
    </>
  );
};

export default Description;
