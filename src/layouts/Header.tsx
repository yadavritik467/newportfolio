import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open,setOpen] = useState<boolean>(false)
  return (
    <div className="w-full bg-white sticky top-0 z-[200] shadow-md border h-[80px] flex sm:justify-evenly justify-between items-center px-10">
      <FaCode className="text-primary " fontSize={30} />

      <div className="sm:hidden flex">
        {!open ? (
          <button className="menu-icon" onClick={() => setOpen(true)}>
            <GrMenu className="text-primary  active:text-primary-dark" fontSize={30} />
          </button>
        ) : (
          <button className="menu-icon" onClick={() => setOpen(false)}>
            <RxCross2 className="text-primary active:text-primary-dark" fontSize={30} />
          </button>
        )}
      </div>
      <div className={`${open ? 'top-[90%] transition-all duration-300 ':'top-[-600%] transition-all duration-300'}  flex sm:flex-row max-sm:absolute max-sm:bg-white max-sm:w-full  z-[-10] left-0 flex-col justify-between items-center gap-10`}>
        <a className="text-primary tracking-wider" href="#home">
          Home{" "}
        </a>
        <a className="text-primary tracking-wider" href="#about">
          About Me
        </a>
        <a className="text-primary tracking-wider" href="#experience">
          {" "}
          Experience{" "}
        </a>
        <a className="text-primary tracking-wider" href="#projects">
          {" "}
          Projects{" "}
        </a>
        <a className="text-primary tracking-wider" href="#contact">
          {" "}
          Contact{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
