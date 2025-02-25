import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about1", {
      duration: 2800,
      distance: "100px",
      origin: "left",
      delay: 300,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".about2", {
      duration: 2800,
      distance: "100px",
      origin: "right",
      interval: 100,
      delay: 300,
    });
  }, []);

  return (
    <div className="w-11/12 md:w-4/5 p-4 h-full md:h-screen flex flex-col md:flex-row justify-center mx-auto md:space-x-40 space-y-[36rem] md:space-y-0">
      {/* Image Section */}
      <div className="about1 md:flex-1 relative flex flex-col items-center mr-8">
        <span className="absolute h-[450px] w-full md:h-3/4 md:w-3/4 mt-[35px] ml-[70px] md:mt-[50px] md:ml-[100px] rounded-xl border-[20px] md:border-[24px] border-solid border-emerald-500 border-y-emerald-700"></span>
        <img
          src={`${process.env.PUBLIC_URL}/images/image1.jpg`}
          alt="Profile"
          className="absolute object-cover border-2 border-gray-900 h-[450px] w-full md:h-3/4 md:w-3/4 rounded-xl transform translate-x-0 translate-y-0"
        />
      </div>

      {/* Description Section */}
      <div className="about2 md:flex-1 flex flex-col align-top justify-start translate-y-0 md:translate-y-28 text-center md:text-left">
        <h1 className="mb-6 text-3xl md:text-4xl font-semibold text-emerald-50">
          ABOUT ME
        </h1>
        <p className="overflow-hidden break-words mb-10 mx-auto text-gray-400 md:mr-20 text-base md:text-xl leading-7 md:leading-9 px-4 md:px-0">
          I am a software developer with a background in accounting and a strong
          passion for software development and engineering. I have experience
          in designing, coding, and maintaining top-class, user-friendly web
          applications to provide modern solutions to complex problems. I am
          seeking a software developer role where I can leverage my coding
          expertise and contribute to innovative projects that will enhance
          your team's capabilities.
        </p>
        <div className="mt-4">
          <button className="border-4 border-emerald-200 border-b-emerald-500 text-gray-200 text-sm md:text-lg tracking-wide font-semibold px-10 md:px-16 py-4 md:py-6 rounded-xl hover:bg-gray-900">
            MY RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
