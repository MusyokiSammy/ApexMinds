import React, { useRef, useState } from 'react'
import { BsDot } from "react-icons/bs";
import { ProjectsData } from '../components/Projects/ProjectsData';
import CardProject from '../components/Projects/Features/CardProject';
import { LuNetwork, LuMonitor } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";

const Projects = () => {
  const [selectedButton, setSelectedButton] = useState('All');
  const [projects, setProjects] = useState([...ProjectsData]);

  const handleButtonClick = (category) => {
    setSelectedButton(category);

    if (category === 'All') {
      setProjects(ProjectsData)
    } else {
      const filteredProjects = ProjectsData.filter((project) => project.category === category);
      setProjects(filteredProjects)
    }
  }
  return (
    <React.Fragment>
      <section className="relative isolate h-screen w-full pb-16 font-Poppins">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-6">
            <div className="flex flex-col items-center border gap-8 py-16 rounded-2xl">
              <h2 className="p-2 border px-4 shadow-xl bg-green-100 font-semibold rounded-md flex items-center gap-4">
                {" "}
                <span>
                  <BsDot />
                </span>{" "}
                Projects{" "}
                <span>
                  <BsDot />
                </span>
              </h2>

              <h1 className="text-6xl font-semibold">Our Projects</h1>
            </div>
            <div className="flex items-center justify-center my-6">
              <button
                onClick={() => handleButtonClick("All")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "All" ? "bg-green-500" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleButtonClick("Software Development")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "Software Development"
                    ? "bg-green-500"
                    : "text-green-500"
                }`}
              >
                <FaLaptopCode className='flex md:hidden h-6 w-6' />
                <span className='hidden md:flex'>Software Development</span>
              </button>
              <button
                onClick={() => handleButtonClick("UI/UX Design")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "UI/UX Design" ? "bg-green-500" : "text-green-500"
                }`}
              >
                <LuMonitor className='flex md:hidden h-6 w-6' />
                <span className='hidden md:flex'>UI/UX Designs</span>
              </button>
              <button
                onClick={() => handleButtonClick("Graphic Design")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "Graphic Design" ? "bg-green-500" : "text-green-500"
                }`}
              >
                <SiMaterialdesignicons className='flex md:hidden h-6 w-6' />
                <span className='hidden md:flex'>Graphic Designs</span> 
              </button>
              <button
                onClick={() => handleButtonClick("Networking")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "Networking" ? "bg-green-500" : "text-green-500"
                }`}
              >
                <LuNetwork className='flex md:hidden h-6 w-6' />
                <span className='hidden md:flex'>Networking</span> 
              </button>
            </div>

            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 overflow-y-scroll">
              {projects.map((project) => (
                <CardProject project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects
