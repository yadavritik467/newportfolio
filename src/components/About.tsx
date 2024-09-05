import { useEffect, useState } from "react";

const About = () => {
  const [skills, setSkills] = useState<
    { skillName: string; percentage: number }[]
  >([
    {
      skillName: "React Js",
      percentage: 0,
    },
    {
      skillName: "Next Js",
      percentage: 0,
    },
    {
      skillName: "Angular Js",
      percentage: 0,
    },
    {
      skillName: "Node / Express Js",
      percentage: 0,
    },
    {
      skillName: "Mongodb",
      percentage: 0,
    },
    {
      skillName: "MySql",
      percentage: 0,
    },
    {
      skillName: "Tailwind css",
      percentage: 0,
    },
  ]);

  useEffect(() => {
   setTimeout(() => {
    setSkills([
      {
        skillName: "React Js",
        percentage: 78,
      },
      {
        skillName: "Next Js",
        percentage: 55,
      },
      {
        skillName: "Angular Js",
        percentage: 65,
      },
      {
        skillName: "Node / Express Js",
        percentage: 70,
      },
      {
        skillName: "Mongodb",
        percentage: 62,
      },
      {
        skillName: "MySql",
        percentage: 52,
      },
      {
        skillName: "Tailwind css",
        percentage: 78,
      },
    ]);
   }, 300);
  }, []);

  return (
    <div id="about" className="bg-white grid grid-cols-12  pb-5 h-fit">
      <div className="col-span-12 text-center py-5">
        <p className="text-primary text-[30px]">About Me</p>
      </div>
      <div className="col-span-6 max-2xl:col-span-12 max-sm:px-5 p-20 pt-10">
        <p className="text-justify">
          <span className="font-bold text-[25px] text-primary-dark tracking-wider">
            {" "}
            Hello, I’m Ritik Yadav ,{" "}
          </span>{" "}
          <br />
          <span className="text-primary-dark tracking-wider">
            I graduated with a B.Sc. in Mathematics from KG Arts and Science
            College in 2021. After completing my degree, I immersed myself in
            the world of coding, driven by a newfound passion for technology.
            Over the past two years, I've become a self-taught Full Stack
            Developer, specializing in creating websites, mobile apps, and web
            applications. My journey has been hands-on, with numerous freelance
            projects that reflect my commitment to delivering high-quality
            digital solutions. I thrive on solving complex problems and
            continuously expanding my skills in the ever-evolving tech
            landscape.
          </span>
        </p>
      </div>
      <div className="col-span-6 max-2xl:col-span-12 max-sm:px-5 flex flex-col gap-10 pt-10 max-2xl:px-20  px-5">
        {skills?.map((sk, i) => (
          <div
            key={i}
            className="w-[500px] max-2xl:w-full relative border border-primary h-[18px] rounded-full"
          >
            <span className="absolute top-[-25px] text-primary-dark left-0">
              {sk?.skillName}
            </span>
            <span className="absolute top-[-25px] text-primary-dark right-0">
              {sk?.percentage} %
            </span>
            <div
              style={{ width: `${sk?.percentage}%` }}
              className={`bg-primary transition-all duration-1000  h-full rounded-full`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
