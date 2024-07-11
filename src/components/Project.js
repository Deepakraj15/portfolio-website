const Project = () => {
  return (
    <>
      <div className="project w-full section center">
        
          <div className="cards w-full h-full grid grid-cols-2 gap-7 m-4  ">
            <div className="card col-start-1 row-span-2 row-start-1 w-full   grid-row-4">
              <div className="cover-img ">
                <img
                  className="image-cover w-full h-full object-cover"
                  src="./materials/ias.png"
                  alt="not found"
                />
              </div>
              <div className="card-name p-2">
                Integrated Authentication System
              </div>
              <div className="card-description p-2">
                This project leverages machine learning and deep learning
                techniques to create a multi-factor authentication (MFA) system.
                It analyzes users' facial features, utilizes device-based
                authentication, and monitors signature pattern behavior for
                enhanced security.
              </div>
              <div className="link">
                <a href="https://github.com/Deepakraj15/Integrated-Authentication-System">
                  Go to Github
                </a>
              </div>
            </div>
            <div className=" col-start-2 row-start-1 w-full h-full center">
              <div className="heading w-100 m-10">
                My Projects
                <p className="sub-heading">Things that I have built.</p>
              </div>
            </div>
            <div className="card col-start-2 row-start-2 w-full row-span-2">
              <div className="cover-img">
                <img
                  className="image-cover w-full h-full object-cover"
                  src="./materials/music.png"
                  alt="not found"
                />
              </div>
              <div className="card-name p-2">
                Mood Based Music Recommender
              </div>
              <div className="card-description p-2">
                              This project leverages vision transformers for emotion detection and CNN (Convolutional Neural Networks) for face detection.
                              Integrated with the Spotify API, it provides songs tailored to the user's current emotional state.
                </div>
              <div className="link">
                <a href="https://github.com/Deepakraj15/Mood-based-Music-recommeder">
                  Go to Github
                </a>
              </div>
            </div>
            <div className="card col-start-1 row-start-3 w-full row-span-2">
              <div className="cover-img">
                <img
                  className="image-cover w-full h-full object-cover"
                  src="./materials/diet.png"
                  alt="not found"
                />
              </div>
              <div className="card-name p-2">
                Dietician Web Application
              </div>
              <div className="card-description p-2">
                              This project collects various user parameters and utilizes the k-means
                              machine learning algorithm to generate personalized diet plans.
                              Additionally, it recommends YouTube videos based on the diet and
                              offers a tracking feature for an improved user experience and efficiency.
              </div>
              <div className="link">
                <a href="https://github.com/Deepakraj15/Dietician-Website">
                  Go to Github
                </a>
              </div>
                      </div>
                      <div className="col-start-2 row-start-3 w-full row-span-2 center">
                          <div className="link-git"><a href="https://github.com/Deepakraj15?tab=repositories"> More Projects</a>
                    </div>
                      </div>
          </div>
        </div>
        
          </>
  );
};

export default Project;
