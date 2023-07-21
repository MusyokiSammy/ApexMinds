import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLinks } from '../Data';

const Header = () => {

    const [isShowing, setIsShowing] = useState(false)
    const handleClose = () => {
        setIsShowing(prev => !prev)
    }

  return (
    <React.Fragment>
      <header className="relative isolate inset-x-0 top-0 font-Poppins">
        <nav className="flex items-center justify-between p-4 lg:px-8 text-sm tracking-widest font-semibold">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ApexMinds</span>
              <h1 className="text-xl lg:text-2xl font-bold text-black uppercase">
                ApexMinds
              </h1>
            </Link>
          </div>

          <div className="flex lg:hidden">
            {isShowing ? (
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 inline-flex items-baseline justify-center p-2.5 cursor-pointer text-gray-950 py-2 mr-2"
              >
                <HiOutlineX className="h-6 w-6" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 inline-flex items-baseline justify-center p-2.5 cursor-pointer text-gray-950 py-2 mr-2"
              >
                <HiMenuAlt3 className="h-6 w-6" />
              </button>
            )}
          </div>

          <div className="hidden lg:flex lg:gap-x-12 uppercase">
            {NavLinks.map((link) => (
              <Link key={link.id} to={link.link} className="">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              type="button"
              className="uppercase bg-green-400 px-6 py-3 rounded-md tracking-widest"
            >
              Hire Us
            </button>
          </div>
        </nav>
        {/* Mobile Menu SideBar */}
        <div
          className={`fixed left-0 w-64 p-4 bg-slate-100 h-full overflow-y-auto transition-transform ${
            isShowing ? "translate-x-0" : "-translate-x-full"
          } ease-out duration-[1.2s]`}
          tabIndex={-1}
        >
          <div className="py-4 overflow-y-auto flex flex-col space-y-6">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="py-2 pl-4 hover:bg-slate-200 uppercase text-xs tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="relative flex flex-1 items-end">
            <button
              type="button"
              className="uppercase bg-green-400 px-4 py-2 rounded-md"
            >
              Hire Us
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header
