import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="w-full bg-gray-100 flex items-center  h-[600px]">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div>
          <p className="text-primary-dark text-[21px] tracking-wider">
            Hello , I'm
          </p>
          <p className="text-[55px] font-bold tracking-wider text-primary-dark">
            Ritik Yadav
          </p>
          <p className="text-primary-dark text-[21px] tracking-wider">
            A Full Stack Developer
          </p>
          <p className="text-primary-dark text-[17px] py-2 w-[400px] text-justify tracking-wider">
            As a Full Stack Developer specializing in MERN and MEAN stacks, I
            create robust, scalable web applications. I excel at building
            seamless user experiences with modern frontends and secure,
            efficient backends. Passionate about innovation, I thrive in dynamic
            environments, solving complex challenges.
          </p>
          <button className="bg-btn-primary hover:opacity-80 active:opacity-80 mt-4 text-white tracking-wider px-4 py-2 rounded-md">
            Download Resume
          </button>
          <div className="flex  items-center pt-5 gap-4">
            <a href="https://github.com/yadavritik467">
              <FaGithub
                className="text-primary hover:text-primary-dark"
                style={{ fontSize: "30px" }}
              />
            </a>
            <a href="https://instagram.com/ritik_yadav_23?igshid=ZDdkNTZiNTM= ">
              <AiFillInstagram
                className="text-primary hover:text-primary-dark"
                style={{ fontSize: "30px" }}
              />
            </a>
            <a href="https://wa.me/6260380884">
              <AiOutlineWhatsApp
                className="text-primary hover:text-primary-dark"
                style={{ fontSize: "30px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/ritik-yadav-736133263">
              <AiFillLinkedin
                className="text-primary hover:text-primary-dark"
                style={{ fontSize: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center h-full relative">
        <div className="z-20  bg-primary p-2  rounded-full">
          <img
            src="/image/profile.png"
            className="w-[450px] p-1 h-[450px] rounded-full bg-white object-cover"
            alt="profile image"
          />
        </div>
        <div className="absolute w-full h-full z-2 top-0 bg-primary rounded-md translate-y-[-50px] right-[-40%]  rotate-45 "></div>
      </div>
    </div>
  );
};

export default Hero;
