import React from "react";
import MyContainer from "./MyContainer";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black">
      <MyContainer>
       <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <NavLink className=" text-xl  font-semibold flex items-center" to={"/"}>
          <img src="https://learneasy.au/wp-content/uploads/2022/07/Rectangle.ai_.svg" alt="" className='w-15 h-10' />
          
            LearnEasy
          </NavLink>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a >
      <FaXTwitter  className="w-9 h-6"/>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>

      </MyContainer>
    </div>
  );
};

export default Footer;
