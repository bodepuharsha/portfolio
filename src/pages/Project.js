import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden py-16">
      {/* Background */}
      <img
        src="/star.jpg"
        alt="background"
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />

      {/* Projects */}
      <div className="z-20 flex items-center justify-center gap-6 m-4 flex-wrap">
        <ProjectCard
          name="Project 1"
          image="/project/p1.png"
          about="Description about Project 1. Explain main features, tools, and tech stack."
          
          code="https://github.com/bodepuharsha/chatting"
        />

        <ProjectCard
          name="Project 2"
          image="/project/p2.png"
          about="Description about Project 2. Highlight core functionality and usage."
          
          code="https://github.com/bodepuharsha/Resortly"
        />
      </div>
    </div>
  );
}

export default Project;
