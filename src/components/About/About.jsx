import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          {/* <img className="md:h-80" src={AboutImg} alt="About img" /> */}

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  "As a passionate and motivated fresher in Frontend
                  Development, I bring a solid foundation in building
                  interactive and user-friendly web interfaces. I have hands-on
                  experience with HTML, CSS, JavaScript, and frameworks like
                  React.js, which I have utilized in personal and academic
                  projects to create responsive and visually appealing websites.
                  I am eager to contribute my creativity and problem-solving
                  skills to real-world projects while learning and growing
                  within a professional environment. My ability to adapt to new
                  technologies and my dedication to delivering high-quality work
                  make me a valuable team member. I'm enthusiastic about
                  exploring innovative solutions and collaborating with others
                  to enhance user experiences through modern web technologies."
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database SQL
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  In addition to my frontend skills, I have a solid
                  understanding of SQL, enabling me to work with databases
                  effectively. I have experience in writing queries to retrieve,
                  update, and manage data, which complements my ability to
                  develop full-stack applications. I am eager to contribute my
                  technical expertise to real-world projects, continuously learn
                  new technologies, and collaborate with teams to deliver
                  high-quality solutions that enhance user experiences."
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a basic understanding of backend development with
                  Node.js and Express, which enables me to create simple
                  server-side applications and RESTful APIs. Furthermore, I have
                  a foundational knowledge of SQL for managing databases and
                  Core Java concepts, giving me a well-rounded skill set for
                  understanding object-oriented programming and backend logic. I
                  am eager to contribute my technical expertise, continuously
                  enhance my skills, and collaborate with teams to deliver
                  efficient and innovative solutions."
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
