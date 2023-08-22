import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import { ProjectsData } from '../components/Projects/ProjectsData';
import CardProject from '../components/Projects/Features/CardProject';
import { LuNetwork, LuMonitor } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: rgba(196, 196, 196, 0.31);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(196, 196, 196, 0.12);
`;

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
      <section className="relative isolate h-full w-full pb-16 font-Poppins">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-2 sm:px-6 h-screen overflow-y-scroll scrollbar-hide">
            <div className="relative ">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Projects"
                className="w-full h-full object-cover rounded-2xl absolute"
              />
              <StyledDiv className="relative flex flex-col items-center gap-8 py-10 md:py-16">
                <h2 className=" p-2 border px-4 shadow-xl bg-green-100 font-semibold rounded-md flex items-center gap-4">
                  {" "}
                  <span>
                    <BsDot />
                  </span>{" "}
                  Projects{" "}
                  <span>
                    <BsDot />
                  </span>
                </h2>

                <h1 className="text-3xl md:text-6xl font-semibold">
                  Our Projects
                </h1>
              </StyledDiv>
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
                    : ""
                }`}
              >
                <FaLaptopCode className="flex md:hidden h-6 w-6" />
                <span className="hidden md:flex">Software Development</span>
              </button>
              <button
                onClick={() => handleButtonClick("UI/UX Design")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "UI/UX Design" ? "bg-green-500" : ""
                }`}
              >
                <LuMonitor className="flex md:hidden h-6 w-6" />
                <span className="hidden md:flex">UI/UX Designs</span>
              </button>
              <button
                onClick={() => handleButtonClick("Graphic Design")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 ${
                  selectedButton === "Graphic Design" ? "bg-green-500" : ""
                }`}
              >
                <SiMaterialdesignicons className="flex md:hidden h-6 w-6" />
                <span className="hidden md:flex">Graphic Designs</span>
              </button>
              <button
                onClick={() => handleButtonClick("Networking")}
                type="button"
                className={`p-2 border rounded-md px-4 mx-2 transition-transform duration-700 ease-in-out ${
                  selectedButton === "Networking" ? "bg-green-500" : ""
                }`}
              >
                <LuNetwork className="flex md:hidden h-6 w-6" />
                <span className="hidden md:flex">Networking</span>
              </button>
            </div>

            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 ">
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
