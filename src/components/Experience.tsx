import { FaAngular, FaHtml5, FaNode, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";

const Experience = () => {
  const projects: {
    title: string;
    date: string;
    description: string;
    image: string;
    isVideo: boolean;
    url: string;
    techStack: JSX.Element[];
  }[] = [
    {
      title: "Freelance Mobile App Developer",
      date: "June 2024 - August 2024",
      description: `I developed an e-commerce Android app focused on medicine purchases, integrating essential features like Add to Cart, HDFC Payment Gateway, Order Cancellation, and Push Notifications. The app is optimized for fast loading through lazy loading techniques, ensuring a smooth user experience from browsing to checkout.`,
      image: "path-to-your-image1.jpg",
      url: "",
      isVideo: true,
      techStack: [
        <TbBrandReactNative
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiJavascript
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <RiTailwindCssFill
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <IoLogoFirebase
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <TbBrandRedux
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
      ],
    },
    {
      title: "React & Tailwind CSS Website",
      date: "Completed Project",
      description: `I created a website for doctors using React and Tailwind CSS, where users can book appointments and doctors can showcase their services. The website also allows doctors to present their hospital details, results, and other relevant information.`,
      image: "/image/exp/shivhospital.png",
      url: "https://shivhospitalraigarh.com/",
      isVideo: false,
      techStack: [
        <FaReact
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <RiTailwindCssFill
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <FaHtml5
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiJavascript
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <FaPhp
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiMysql
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
      ],
    },
    {
      title: "Angular Developer Intern - Exampil Pvt Ltd",
      date: "17th October 2023 - 17th April 2024",
      description: `During my 6-month internship at Exampil Pvt Ltd, I worked as an Angular Developer. I developed an ad-tech website from scratch where users can book tempos automatically. The project also included multiple role-based dashboards, providing a comprehensive and user-friendly interface.`,
      image: "/image/exp/ridingad.png",
      url: "https://ridingad.com/",
      isVideo: false,
      techStack: [
        <FaAngular
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiJavascript
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <RiTailwindCssFill
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <FaHtml5
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <FaNode
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiExpress
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiMongodb
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
      ],
    },
  ];

  return (
    <div id="experience" className="w-full pt-16">
      <div className="w-full text-center py-5">
        <p className="text-primary text-[30px] font-semibold">Experience</p>
      </div>

      <div className="w-full relative flex flex-col gap-20 px-20  max-[900px]:px-5">
      <div className="absolute w-[800px] h-[800px] z-[-2] top-0 bg-primary rounded-lg  left-[-30%] max-[900px]:left-[-50%] max-sm:left-[-150%]  -rotate-45 "></div>
        {projects.map((project, index) => (
          <div
            key={index}
            className={` w-full flex items-center ${
              index % 2 === 0 ? "flex-row max-[900px]:flex-col" : "flex-row-reverse max-[900px]:flex-col-reverse"
            }  bg-white rounded-lg`}
          >
            <div className={`w-[50%] max-[900px]:w-full p-5  flex flex-col justify-center`}>
              <h2 className="text-[24px] font-bold text-primary-dark mb-2">
                {project.title}
              </h2>
              <p className="text-[14px] text-gray-500 mb-4">{project.date}</p>
              <p className="text-[16px] text-primary-dark">
                {project.description}
              </p>

              <p className="text-[14px] text-gray-500 mt-4">Tech Stack </p>
              <div className="flex gap-4  p-2 items-center">
                {project?.techStack?.map((ts, i) => (
                  <div className="cursor-pointer" key={i}>
                    {" "}
                    {ts}{" "}
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={() => window.open(project?.url, "_blank")}
              className="w-[50%] max-[900px]:w-full p-5 cursor-pointer flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={project?.image}
                alt={`${project.title} Screenshot`}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
