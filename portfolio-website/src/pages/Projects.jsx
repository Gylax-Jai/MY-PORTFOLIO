import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState([
  {
    title: 'StudyHub – Online Study Center',
    description:
      'A full-stack learning platform where students can register, login, and access protected study materials. Features include session-based authentication, password encryption, contact form with email storage, and fully responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'EJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Gylax-Jai/StudyHub',
    live: 'https://studyhub-production-af3f.up.railway.app'
  },
  {
    title: 'Shop Management System',
    description:
      'A multi-role inventory and billing management system for shops with real-time dashboard updates. Includes role-based authentication for employees and owners, CRUD operations, and secure admin/employee routes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'EJS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Gylax-Jai/SHOP_MANAGEMNT_SYSTEM',
    live: ''
  },
  {
    title: 'Todo List React App',
    description:
      'A responsive and animated React-based todo list app supporting task filtering, local storage for persistence, and smooth UI transitions.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Gylax-Jai/To-do-List_React',
    live: 'https://to-do-list-react-ten-sigma.vercel.app'
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built in React with Tailwind CSS, showcasing projects, skills, and contact form with animations and responsive design.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Gylax-Jai/MY-PORTFOLIO',
    live: 'https://jai-portfolio-omega.vercel.app'
  },
  {
    title: 'Music Player UI',
    description:
      'A frontend music player design with custom controls, progress bar, responsive layout, and smooth visual transitions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Gylax-Jai/MUSIC-PLAYER',
    live: ''
  },
  {
    title: 'URL Shortener Microservice',
    description:
      'A backend API microservice that generates short URLs, handles redirection, and tracks analytics. Built with Express and MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Gylax-Jai/URL_SHORTNER',
    live: ''
  },
  {
    title: 'NETFLIX-CLONE',
    description:
      'A responsive Netflix clone landing page built using only HTML and CSS. It replicates the visual design of Netflix’s homepage with sections like hero banner, features, and FAQ.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/Gylax-Jai/NETFLIX_CLONE',
    live: ''
  },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-25 font-mono ">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-700/30 px-3 py-1 rounded-full text-sm text-purple-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-600 transition"
              >
                <FaGithub />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition"
                >
                  <FaExternalLinkAlt />
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
