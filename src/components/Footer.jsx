import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTelegram, BiLogoTwitter, BiLogoWhatsapp, BiPhoneCall,  BiSolidMap } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <React.Fragment>
      <footer className="relative isolate bottom-0 left-0 bg-slate-50 w-full p-4 font-Poppins">
        <div className="max-w-[1560px] mx-auto ">
          {/* Upper Footer Content */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <h2 className="font-semibold text-3xl">ApexMinds</h2>
            <div className="flex items-center justify-center gap-2 font-semibold">
              <BiPhoneCall stroke="5" className="h-10 w-10 text-green-500" />
              <div>
                <span className="text-sm">Call Any Time</span>
                <p>+254 710 979 256</p>
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div className="relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="mt-4">
              <div className="space-y">
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    <BiSolidMap className="text-green-500 text-xl" />
                  </span>
                  <h1 className="font-bold text-lg text-gray-800">Address</h1>
                </div>
                <p className="">Kahawa Wendani, Nairobi</p>
                <p className="">Kenya</p>
              </div>
              <div className="space-y">
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    <BiLogoTelegram className="text-green-500 text-xl" />
                  </span>
                  <h1 className="font-bold text-lg text-gray-800">Say Hello</h1>
                </div>
                <p className='mb-3'>apexminds@gmail.com</p>
                <p>info.apexminds@gmail.com</p>
              </div>
              <div className="mt-4">
                <h1 className="font-bold text-sm text-gray-800 mb-2">
                  See Our New Updates
                </h1>

                <form method="post" className="flex items-center ">
                  <input
                    type="email"
                    placeholder="Email here..."
                    aria-label="Email address"
                    className="p-2 bg-gray-200 rounded-l-md outline-none placeholder:text-sm placeholder:text-green-950"
                  />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="group p-2 bg-green-500 rounded-r-md "
                  >
                    <BsArrowRightShort className="text-2xl -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out " />
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="font-bold text-lg text-gray-800 mb-4">
                Our Solutions
              </h1>
              <ul className='space-y-3'>
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Networking</li>
                <li>Graphics Design</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="font-bold text-lg text-gray-800 mb-4">Company</h1>
              <ul className="space-y-3 ">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Projects</li>
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="font-bold text-lg text-gray-800 mb-4">
                Resources
              </h1>
              <ul className="space-y-3">
                <li>Support Area</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Career</li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          {/* Lower Footer Content */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="text-sm">
              &copy;Copyright {new Date().getFullYear()}{" "}
              <span className="font-bold hover:text-green-500 transition-all duration-200 ease">
                <a href="/"> ApexMinds.</a>
              </span>
            </h2>

            <div className="flex items-center justify-center mt-3 sm:mt-0">
              <div className="mx-2 rounded-lg hover:bg-green-500 border p-2 group transition-all ease-in-out duration-500">
                <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-green-500" />
              </div>
              <div className="mx-2 rounded-lg hover:bg-green-500 border p-2 group transition-all ease-in-out duration-500">
                <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-green-500" />
              </div>
              <div className="mx-2 rounded-lg hover:bg-green-500 border p-2 group transition-all ease-in-out duration-500">
                <BiLogoWhatsapp className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-green-500" />
              </div>
              <div className="mx-2 rounded-lg hover:bg-green-500 border p-2 group transition-all ease-in-out duration-500">
                <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
