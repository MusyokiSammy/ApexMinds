import React from 'react'
import { BsDot } from "react-icons/bs";

const Projects = () => {
  return (
    <React.Fragment>
      <section className="relative isolate h-screen w-full py-16 font-Poppins">
        <div className="mx-auto max-w-[1560px]">
          <div className='relative px-6'>
            <div className="flex flex-col items-center border">
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

              <h1 class>Our Projects</h1>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects
