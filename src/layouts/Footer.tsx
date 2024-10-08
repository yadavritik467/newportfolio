import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-primary shadow-md border h-[50px] flex justify-evenly items-center px-10 max-sm:px-5 max-sm:justify-between">
      <FaCode className="text-white" fontSize={30} />

      <div className="flex justify-between items-center gap-10 max-sm:gap-4">
       <p className="text-white">Developed By</p>
       <p className="text-white"><b>Ritik Yadav</b></p>
      </div>
    </div>
  );
};

export default Footer;
