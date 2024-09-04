import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-[200] shadow-md border h-[80px] flex justify-evenly items-center px-10">
      <FaCode className="text-primary" fontSize={30} />

      <div className="flex justify-between items-center gap-10">
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
