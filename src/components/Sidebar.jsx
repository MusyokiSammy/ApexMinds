import React from 'react'
import { Link } from 'react-router-dom';
import { NavLinks } from "../Data";


const Sidebar = ({ isShowing }) => {
  return (
    <React.Fragment>
      <div
        className={`fixed left-0 w-64 p-4 bg-slate-100 h-screen overflow-y-auto transition-transform ${
          isShowing ? "translate-x-0" : "-translate-x-full"
        } ease-out duration-[1.2s]`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
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
    </React.Fragment>
  );
}

export default Sidebar
