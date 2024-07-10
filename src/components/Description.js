const Description = () => {
    const description = "An Engineer with expertise in coding languages like C/C++, Java, Python, and JavaScript, along with skills cloud computing, automation, and ethical hacking. I/'m passionate about exploring new opportunities and continuously expanding my knowledge. When I/'m not engineering solutions, I enjoy playing chess and contributing to open-source projects. Let's connect and build something awesome together !";
    return (
        <>
            <div className=" w-full h-screen flex items-end section">
            <div className="description w-11/12 h-4/6">
                <div className="w-4/6 content ">
                    <p className="tracking-widest uppercase ">
                            A Software Engineer 
                            <br />
                            based in India .
                        </p>     
                       
                    <p className="personal-info ">" { description} " </p>
                    </div>
                    <br/>
                    <div className="link"><a href="#"> More about me &gt;</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;