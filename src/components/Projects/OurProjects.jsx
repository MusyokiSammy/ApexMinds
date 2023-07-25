import React from 'react'
import CardProject from './Features/CardProject';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectsData } from './ProjectsData';

const styledLink = styled.a`
    transition: anima

  @keyframes circle-in-hesitate {
    0% {
      clip-path: circle(0%);
    }
    40% {
      clip-path: circle(40%);
    }
    100% {
      clip-path: circle(125%);
    }
  }

  &:hover {
      animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-hesitate both;

  }
  
`;

const OurProjects = () => {
  return (
    <React.Fragment>
      <section className="font-Poppins relative isolate w-full py-16">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-6 flex flex-col justify-center gap-8 items-start">
            <h1 className="font-semibold text-gray-800 text-4xl md:text-6xl capitalize leading-10 tracking-tighter">
              Projects
            </h1>
            <p className="sm:text-lg">
              Transforming visions into reality, we deliver innovative and
              bespoke solutions for each of our projects, <br /> crafted with
              passion and precision to empower your business for success.
            </p>

            <Link
              to="/projects"
              className="p-3 border rounded-md bg-green-500 text-sm"
            >
              View All Projects ➔
            </Link>
          </div>
          <div
            className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid p-4 gap-4'
          >
            {ProjectsData.map((project) => (
                <CardProject project={project} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OurProjects
