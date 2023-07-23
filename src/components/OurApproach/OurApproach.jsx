import React, { useRef } from 'react'
import hero from "../../Images/hero.jpg"
import software from "../../Images/Software.jpg"
import Transparency from "../../Images/Transparency.jpg"
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


const StyledApproach = styled.div`
  height: 36rem;
  display: flex;
  background: rgba(240, 240, 240, 0.63);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(192, 192, 192, 0.48);

  @media (max-width:  768px) {
    height: 56rem;
  }
`;
    

const OurApproach = () => {
    const progressCircleRef = useRef(null)
    const progressContentRef = useRef(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircleRef.current.style.setProperty('--progress', 1 - progress);
        progressContentRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  return (
    <React.Fragment>
      <section className="relative isolate w-full font-Poppins py-16">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-6 flex flex-col justify-center gap-8 items-start">
            <h1 className="font-bold text-gray-800 text-4xl md:text-6xl capitalize leading-10 tracking-tighter">
              Our Approach
            </h1>
            <p className="sm:text-lg">
              Our approach is rooted in innovation, collaboration, and a
              customer-centric focus. We strive to <br /> deliver exceptional
              solutions in software development, design, and networking,
              tailored to meet the unique needs and objectives of our clients.
            </p>
          </div>

          <StyledApproach className="flex flex-col md:flex-row m-4 md:m-8">
            <Swiper
              spaceBetween={30}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="w-full rounded-2xl p-2 scrollbar-hide"
            >
              <SwiperSlide className="">
                <img
                  src={software}
                  alt=""
                  className="object-cover block h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={hero}
                  alt=""
                  className="object-cover block h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={Transparency}
                  alt=""
                  className="object-cover block h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={software}
                  alt=""
                  className="object-cover block h-full w-full"
                />
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircleRef}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContentRef}></span>
              </div>
            </Swiper>
            <div className=" flex flex-col lg:flex-row w-full md:h-full p-2 md:p-4 gap-4 md:gap-6">
              <div className="flex flex-row lg:flex-col gap-10 md:w-full">
                <div className="border-2 h-48  lg:h-full w-full border-gray-300 rounded-2xl">
                </div>
                <div className="border-2 h-48  lg:h-full w-full border-gray-300 rounded-2xl">
                </div>
              </div>
              <div className="border-2 md:h-full w-full h-80 border-gray-300 rounded-2xl">
              </div>
            </div>
          </StyledApproach>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OurApproach
