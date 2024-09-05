import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";

const Project = () => {
  const projects: {
    title: string;
    description: string;
    image: string;
    isVideo: boolean;
    url: string;
    techStack: JSX.Element[];
  }[] = [
    {
      title: "E-commerce Medicine App - MERN",
      description: `This project is an e-commerce platform built using the MERN stack and Tailwind CSS, specifically designed for purchasing medicines. It features an admin panel, data visualization using Chart.js, and functionalities like order creation, Razorpay integration for online payments, order cancellation, and product management by admins.`,
      image: "/image/project/ecommerce.png",
      url: "", // Replace with your actual URL
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
        <FaNode
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiExpress
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
      title: "Spotify Clone - MERN",
      description: `Developed a Spotify clone using the MERN stack and Tailwind CSS. Users can follow or unfollow other users, create their own albums, upload songs, and view song listen counts. The project includes server-side search, pagination, and a sleek, user-friendly interface.`,
      image: "/image/project/musicapp.png", // Replace with your actual image path
      url: "https://smoothei.netlify.app/login", // Replace with your actual URL
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
        <FaNode
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiExpress
          className="text-primary hover:text-primary-dark"
          style={{ fontSize: "30px" }}
        />,
        <SiRedux
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
    <div id="projects" className="w-full pt-28">
      <div className="w-full text-center py-5">
        <p className="text-primary text-[30px] font-semibold">Projects</p>
      </div>

      <div className="w-full relative  flex flex-col gap-20 px-20 max-[900px]:px-5">
        <div className="absolute w-[800px] h-[800px] z-[-2] top-0 bg-primary rounded-lg  right-[-20%] max-[900px]:right-[-50%] max-sm:right-[-150%]  -rotate-45 "></div>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full flex items-center ${
              index % 2 === 0
                ? "flex-row max-[900px]:flex-col"
                : "flex-row-reverse max-[900px]:flex-col-reverse"
            } bg-white rounded-lg  p-0`}
          >
            <div
              className={`w-[50%] max-[900px]:w-full p-5 flex flex-col justify-center`}
            >
              <h2 className="text-[24px] font-bold text-primary-dark mb-2">
                {project.title}
              </h2>
              <p className="text-[16px] text-primary-dark">
                {project.description}
              </p>

              <p className="text-[14px] text-gray-500 mt-4">Tech Stack </p>
              <div className="flex gap-4 p-2 items-center">
                {project?.techStack?.map((ts, i) => (
                  <div className="cursor-pointer" key={i}>
                    {ts}
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={() => window.open(project?.url, "_blank")}
              className="w-[50%] max-[900px]:w-full p-5 cursor-pointer flex justify-center items-center"
            >
              <img
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

export default Project;
