import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-20 font-mono">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
        About Me
      </h1>

      <div className="max-w-4xl bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md border border-purple-500/20">
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
          Hi! I'm <span className="text-purple-400 font-semibold">Jai Sindhu</span>,
          a passionate and creative full-stack developer with a knack for building
          beautiful, responsive websites and web apps. I recently completed full stack development using modern tools like React, Node.js, Express, MongoDB & SQL.
        </p>

        <p className="text-gray-300 text-md">
          My goal is to build secure, scalable and user-friendly apps that solve real-world problems. Apart from development, I love working on performance optimization and creating smooth UI/UX experiences.
        </p>
        <p className="text-gray-300 text-md mt-4">
          Outside of tech, I enjoy exploring new tools, playing games, and hitting the gym to stay fit — I believe in balancing both brain and body.
        </p>


        <p className="mt-4 text-gray-400 text-sm italic text-center   ">
          “Build, Break, Learn, Repeat.”
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/JAI_RESUME.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

