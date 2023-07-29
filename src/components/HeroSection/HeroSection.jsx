import React  from 'react'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="h-[92.4vh] w-full font-Poppins relative isolate bg-hero bg-cover bg-no-repeat bg-center">
        <div className="absolute bg-black  w-full h-full opacity-60"></div>
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-6 flex flex-col justify-center gap-8 items-start h-[92.4vh]">
            <div className="flex text-xl md:text-3xl gap-2 uppercase font-semibold text-gray-50 tracking-wider">
              <h2>Web.</h2>
              <h2>Design.</h2>
              <h2>Graphics.</h2>
              <h2>Digital.</h2>
            </div>
            <div className=" text-gray-50">
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl capitalize leading-10 tracking-wider ">
                Elevate Your Software Experience: <br />
                Where Innovation Meets Exceptional Customer Service!
              </h1>
            </div>
            <div className="text-gray-50">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident atque eaque quidem aspernatur. Debitis, reprehenderit.
              </p>
            </div>

            <div className="">
              <Link to="/" className="px-3.5 py-2.5 bg-green-500 rounded-md" 
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroSection
