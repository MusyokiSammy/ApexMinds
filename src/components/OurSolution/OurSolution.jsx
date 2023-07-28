import React, {  useRef } from 'react'
import Card from './Features/SolutionCard';
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";
import { LuNetwork, LuMonitor } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";

  const cardsData = [
    {
      id: 1,
      icon: <FaLaptopCode className="h-10 w-10 text-green-500" />,
      title: "Web Development",
      description:
        "Our Web Development services provide cutting-edge, user-friendly websites and web applications tailored to your business needs, ensuring an engaging online presence and seamless user experience.",
      list: [
        {
          id: 1,
          text: "Custom website design and development",
        },
        {
          id: 2,
          text: "Responsive and mobile-friendly design",
        },
        {
          id: 3,
          text: "Website maintenance and support",
        },
      ],
    },
    {
      id: 2,
      icon: <SiMaterialdesignicons className="h-10 w-10 text-green-500" />,
      title: "Graphic Designs",
      description:
        "With our Graphics Designing expertise, we bring your brand to life through captivating visual elements, creating stunning graphics that leave a lasting impression on your audience.",
      list: [
        {
          id: 1,
          text: "Marketing and promotional materials (brochures, flyers, posters)",
        },
        {
          id: 2,
          text: "Social media graphics",
        },
        {
          id: 3,
          text: "Logo and brand identity design",
        },
      ],
    },
    {
      id: 3,
      icon: <LuNetwork className="h-10 w-10 text-green-500" />,
      title: "Networking",
      description:
        "With our Networking solutions, we build robust and secure network infrastructures that keep your business connected, ensuring seamless communication and data flow.",
      list: [
        {
          id: 1,
          text: "Wired and wireless network configuration",
        },
        {
          id: 2,
          text: "Network monitoring and maintenance",
        },
        {
          id: 3,
          text: "Network troubleshooting and support",
        },
      ],
    },
    {
      id: 4,
      icon: <LuMonitor className="h-10 w-10 text-green-500" />,
      title: "UI/UX Designs",
      description:
        "Our UI/UX Designs elevate user experiences, blending aesthetics with functionality to deliver intuitive and visually appealing interfaces that keep your users engaged and delighted.",
      list: [
        {
          id: 1,
          text: "User interface design (UI)",
        },
        {
          id: 2,
          text: "User experience design (UX)",
        },
        {
          id: 3,
          text: "Interaction design",
        },
        {
          id: 4,
          text: "Wireframing and prototyping",
        },
      ],
    },
  ];

const OurSolution = () => {

  const sliderRef = useRef(null)


  // useEffect(() => {
  //   const scrollableComponent = sliderRef.current
  //   scrollableComponent.addEventListener('wheel', (e) => {
  //     e.preventDefault()

  //     const scrollAmount = e.deltaX

  //     scrollableComponent.scrollLeft -= scrollAmount
  //     console.log(e)
  //   })

  // }, [])

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  }
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollRight += sliderRef.current.offsetWidth;
    }
  }
  return (
    <React.Fragment>
      <section className="relative isolate w-full font-Poppins py-16">
        <div className="mx-auto max-w-[1560px]">
          <div className="relative px-6 flex flex-col justify-center gap-8 items-start">
            <h1 className="font-semibold text-gray-800 text-4xl md:text-6xl capitalize leading-10 tracking-tighter">
              Our Solutions
            </h1>
            <p className="sm:text-lg">
              At <span className='text-green-500 font-bold'>ApexMinds</span>, we are committed to delivering exceptional services
              that cater to your unique needs, providing<br />  cutting-edge solutions that enhance efficiency, foster growth, and elevate your overall success.
            </p>
          </div>

          <div className="flex xl:hidden items-center justify-between px-6 h-10 w-full mt-2">
            <button onClick={scrollLeft} className="">
              <VscArrowCircleLeft className="h-8 w-8 text-green-500" />{" "}
            </button>
            <button onClick={scrollRight} className="">
              <VscArrowCircleRight className="h-8 w-8 text-green-500" />
            </button>
          </div>

          <div
          ref={sliderRef}
            className="flex gap-8 items-center w-full overflow-x-scroll scroll-smooth
              scrollbar-hide mx-auto p-4 max-w-[1560px] xl:mt-8"
          >
            {cardsData.map((card) => (
                  <Card card={card} key={card.id}/>
              )
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OurSolution
