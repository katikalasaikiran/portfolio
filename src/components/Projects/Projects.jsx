import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1> <p>: View Project Code on Github</p>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Real-Time Chat Application :
"
          main="Technologies: MongoDB, Express.js, React.js, Node.js, Socket.IO, JWT, Tailwind CSS, DaisyUI
          Real-Time Messaging: Implemented with Socket.IO for instant message delivery and status updates.
Authentication & Authorization: Utilized JWT (JSON Web Tokens) for secure user login and access control.
Responsive UI: Designed with Tailwind CSS and DaisyUI for a modern and responsive interface.
Scalable Backend: Built with Node.js and Express.js for handling API requests and user data.
"
        />
        <ProjectCard
          title="E-commerce Website (React.js) :"
          main="Developed a responsive e-commerce website using React.js, featuring product listings and a shopping cart. Utilized
React hooks for state management and React Router for smooth navigation. Enhanced the user experience with a
responsive UI."
        />
        <ProjectCard
          title="Tic-Tac-Toe Game (React.js) :"
          main="Developed an interactive Tic-Tac-Toe game using React.js with dynamic gameplay and real-time state updates."
        />
      </div>
    </div>
  );
};

export default Projects;
