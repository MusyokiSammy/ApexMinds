import React from 'react'
import styled from 'styled-components'
import { BsArrowRightShort } from "react-icons/bs";
import Photo from "../../../Images/Software.jpg"
import { Link } from 'react-router-dom';


const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 24rem;
  border-radius: 16px;

  @media max-width(768px) {
    height: 30rem;
  }
`
const TagCard = styled.div`
  background: rgba(50, 50, 50, 0.2);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(189, 189, 189, 0.3);
`;

const CardProject = ({project}) => {
  return (
    <React.Fragment>
      <ProjectCard
        key={project.id}
        // className={`${project.id === 3 ? "flex items-center justify-center" : ""}`}
      >
        <img
          src={project.image}
          alt=""
          className="absolute rounded-2xl h-full w-full"
        />
        <TagCard className="relative flex flex-col border-2 top-40 m-10 p-4">
          <h1 className="font-semibold flex text-gray-300">
            {project.category}
          </h1>
          <hr className="w-[20%] h-[5px] text-green-500" />
          <h2 className="font-semibold text-2xl text-white">{project.title}</h2>
          <Link
            to="/projects"
            className="group w-10 h-10 rounded-full  flex items-center justify-center bg-green-500 absolute -right-5"
            style={{
              transform: "translate(0, -50%)",
              top: "50%",
            }}
          >
            <BsArrowRightShort
              size={26}
              className="rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out"
            />
          </Link>
        </TagCard>
      </ProjectCard>
    </React.Fragment>
  );
}

export default CardProject
