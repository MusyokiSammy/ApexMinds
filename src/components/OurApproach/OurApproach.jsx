import React, { useState } from 'react'

const ApproachData = [
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpZW50JTIwY2VudHJpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Client Centric Solutions",
    content:
      "We believe in putting our clients at the center of everything we do. Understanding your vision, goals, and challenges allows us to craft customized solutions that align perfectly with your business objectives.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwdXglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    title: "Creative Excellence in Design",
    content:
      "Our design team is driven by creativity and a passion for aesthetics. We take a user-first approach, ensuring that every design element, from logos to user interfaces, enhances the overall user experience while maintaining a strong brand identity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    title: "Cutting-Edge Software Development",
    content:
      "Our software development team stays ahead of the curve by leveraging the latest technologies and industry best practices. We deliver robust, scalable, and efficient software solutions that empower your business to thrive in the digital landscape.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Attention to Detail in Networking",
    content:
      "Our networking solutions are designed with meticulous attention to detail, ensuring seamless connectivity, enhanced security, and reliable performance. We design and implement network infrastructures that form the backbone of your operations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpZW50JTIwY2VudHJpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Customer Satisfaction",
    content:
      "Our ultimate goal is your satisfaction. We are not just a service provider, we are your partner on the journey to success. Your success is our success, and we are dedicated to helping you achieve your business goals.",
  },
];

    

const OurApproach = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleClickActive = (index) => {
    setActiveTab(index)
  }
  return (
    <React.Fragment>
      <section className="relative isolate w-full font-Poppins py-16">
        <div className="mx-auto max-w-[1560px] px-6">
          <div className="relative flex flex-col justify-center gap-8 items-start">
            <h1 className="font-semibold text-gray-800 text-4xl md:text-6xl capitalize leading-10 tracking-tighter">
              Our Approach
            </h1>
            <p className="sm:text-lg">
              Our approach is rooted in innovation, collaboration, and a
              customer-centric focus. We strive to <br /> deliver exceptional
              solutions in software development, design, and networking,
              tailored to meet the unique needs and objectives of our clients.
            </p>
          </div>

          <div
            className=" relative flex overflow-hidden max-w-[1560px] h-96  mt-8 rounded-lg border"
            style={{
              boxShadow: "5px 5px 8px gray",
              transform: "translate(-50% -50%)",
            }}
          >
            <div className="w-96 h-full border-r gap-2 border-r-green-400 flex flex-col items-center justify-center text-center flex-shrink-0">
              {ApproachData.map((data, index) => (
                <div
                  key={index}
                  onClick={() => handleClickActive(index)}
                  className={`${
                    activeTab === index ? "text-green-500" : ""
                  } h-12 leading-10 w-96 flex items-center text-[16px] font-semibold p-4 cursor-pointer transition-all duration-[1.5s] ease-in-out`}
                >
                  {data.title}
                </div>
              ))}
            </div>
            <div
              className="absolute z-20 w-1 h-12 bg-green-600 left-96 transition-all ease-in-out duration-1000 cursor-default"
              style={{
                top: `calc(66px + ${activeTab * 52}px)`,
                // top: '40px'
              }}
            ></div>
            <div className="w-full relative overflow-hidden h-full group">
              {ApproachData.map((data, index) => (
                <div
                  key={index}
                  className={`${
                    activeTab === index ? "top-0" : "top-[-200%]"
                  } px-12 py-6 absolute  text-center  leading-10 flex flex-col justify-center items-center text-[16px] 
                  font-semibold gap-4 cursor-pointer transition-all duration-[1.5s] ease-in-out h-full text-gray-50`}
                >
                  <img
                    src={data.image}
                    alt=""
                    className="absolute h-full w-full z-0 object-cover object-center hover:scale-110"
                  />
                  <div className="absolute w-full opacity-70 bg-black h-full"></div>
                  <h1 className="text-3xl font-semibold z-10 relative">
                    {data.title}
                  </h1>
                  <p className="text-md font-normal z-10 relative">
                    {data.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OurApproach
