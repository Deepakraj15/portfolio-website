import React, { useEffect } from "react";

const IconList = () => {

  useEffect(() => {
    const iconWrapper = document.querySelector('.icon-wrapper');
    const clone = iconWrapper.cloneNode(true);
    document.querySelector('.conveyor').appendChild(clone);
  }, []);

  return (
    <div className="conveyor w-full h-1/6 center overflow-hidden">
      <div className="icon-wrapper w-100 flex">
        <i className="devicon-androidstudio-plain"></i>
        <i className="devicon-anaconda-original"></i>
        <i className="devicon-cplusplus-plain"></i>
        <i className="devicon-css3-plain"></i>
        <i className="devicon-flask-original"></i>
        <i className="devicon-git-plain"></i>
        <i className="devicon-html5-plain"></i>
        <i className="devicon-java-plain"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-mysql-original"></i>
        <i className="devicon-notion-plain"></i>
        <i className="devicon-opencv-plain"></i>
        <i className="devicon-python-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-tailwindcss-original"></i>
        <i className="devicon-vscode-plain"></i>
      </div>
    </div>
  );
};

export default IconList;
