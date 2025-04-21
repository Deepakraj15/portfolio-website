import React, { useEffect } from "react";

const IconList = () => {
  useEffect(() => {
    const iconWrapper = document.querySelector(".icon-wrapper");
    const clone = iconWrapper.cloneNode(true);
    document.querySelector(".conveyor").appendChild(clone);
  }, []);

  return (
    <div className="conveyor w-full h-1/6 flex items-center overflow-hidden relative">
      <div className="icon-wrapper flex items-center gap-16 px-6 animate-scroll whitespace-nowrap">
        {[
          "java-plain",
          "javascript-plain",
          "html5-plain",
          "css3-plain",
          "bash-plain",
          "react-original",
          "spring-plain",
          "maven-plain",
          "gradle-plain",
          "intellij-plain",
          "vscode-plain",
          "mysql-original",
          "redis-plain",
          "linux-plain",
          "docker-plain",
          "kubernetes-plain",
          "prometheus-plain",
          "git-plain",
          "apachekafka-original",
          "grpc-plain",
          "mongodb-plain",
        ].map((icon, index) => (
          <div
            key={index}
            className="w-12 h-12 flex items-center justify-center"
          >
            <i className={`devicon-${icon} text-[72px]`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconList;
