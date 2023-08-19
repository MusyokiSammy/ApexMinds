import React from 'react'
import styled from "styled-components";
import { BsDot } from 'react-icons/bs';

const StyledDiv = styled.div`
  background: rgba(196, 196, 196, 0.31);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(196, 196, 196, 0.12);
`;

const TeamPage = () => {
  return (
    <React.Fragment>
      <section className="relative isolate h-full w-full pb-16 font-Poppins">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-2 sm:px-6 h-screen overflow-y-scroll scrollbar-hide">
            <div className="relative ">
              <img
                src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover rounded-2xl absolute"
              />
              <StyledDiv className="relative flex flex-col items-center gap-8 py-10 md:py-16">
                <h2 className=" p-2 border px-4 shadow-xl bg-green-100 font-semibold rounded-md flex items-center gap-4">
                  {" "}
                  <span>
                    <BsDot />
                  </span>{" "}
                  Team{" "}
                  <span>
                    <BsDot />
                  </span>
                </h2>

                <h1 className="text-3xl md:text-6xl font-semibold">Our Team</h1>
              </StyledDiv>
            </div>

            <div className="float-left flex items-center justify-between mt-10">
                <div className='w-full'>
                    <p className='text-center p-32 leading-8 mx-auto drop-shadow-xl filter'>
                        Welcome to our talented team of software professionals at
                        ApexMinds. We are a passionate and diverse group of individuals
                        united by our shared love for innovation and technology. With
                        years of experience and a relentless commitment to excellence,
                        we collaborate seamlessly to transform your unique ideas into
                        exceptional digital solutions. We take pride in delivering not
                        only top-tier software but also a customer experience that's
                        both professional and friendly. Get to know the faces behind the
                        code and design; meet the team dedicated to bringing your
                        digital aspirations to life.
                    </p>
                </div>
              <div className='w-full overflow-hidden'>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="team"
                    className='w-full h-full object-cover object-center hover:scale-110 transition-all duration-700 ease-in-out'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TeamPage
