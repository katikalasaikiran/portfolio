import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
// import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {/* <TextChange /> */}
          Hello I'm SaiKiran
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Enthusiastic fresher software developer experienced in development and
          passionate about writing clean, maintainable code. Eager to contribute
          to the team and grow in a collaborative environment.
        </p>
        <a
          href="public\resume.pdf.pdf" // Path to the resume file in the public folder
          download="My_Resume.pdf" // The name for the downloaded file
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] inline-block text-center"
        >
          Download Resume
        </a>
      </div>
      <div>{/* <img className="" src={avatarImg} alt="" /> */}</div>
    </div>
  );
};

export default Home;
