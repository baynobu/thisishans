import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "MySQL" },
  { skill: "VR Development" },
  { skill: "Game Development" },
  { skill: "Jupyter Notebooks" },
  { skill: "Data Science" }
];

const AboutSection = () => {
  const basicSkills = skills.filter((skill) =>
    ["JavaScript", "MySQL", "Python", "Jupyter Notebooks", "Data Science"].includes(skill.skill)
  );

  const intermediateSkills = skills.filter(
    (skill) => !basicSkills.includes(skill)
  );

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hanif and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and i'm a
              <span className="font-bold">{" Computer Science"}</span> enthusiast based in Malang, Indonesia.
            </p>
            <br />
            <p>
            I'm student from 12 Malang Vocational High School, and majored in Software Engineering
            </p>
            <br />
            <p>
            I'm always craving new discoveries and eager to expand my understanding. 
            <span className="font-bold">{" Learning something new"}</span> is my passion, 
            and I constantly seek accurate knowledge to overcome my limited understanding.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-5">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              <div>
                <h2 className="text-xl  mb-2">Basic</h2>
                {basicSkills.map((item, idx) => (
                  <p
                    key={idx}
                    className="bg-teal-500 px-4 py-2 mr-2 mt-2 text-black-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="text-xl mb-2">Intermediate</h2>
                {intermediateSkills.map((item, idx) => (
                  <p
                    key={idx}
                    className="bg-emerald-500 px-4 py-2 mr-2 mt-2 text-black-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                ))}
              </div>
            </div>
            {/* <Image
              
              src="/hero-image1.png"
              alt=""
              width={250}
              height={300}
              style={{ position: 'relative', left:'54px', top: '20px' }}
              //className="hidden md:block md:relative md:bottom-0 md:left-27 md:z-0 md:top-5"
            /> */}
            <div className="mt-10">
              <h1 className="font-bold text-2xl mb-4">Achievement</h1>
              <div>
                <p>
                 • &nbsp; Bronze Medal at the <span className="font-bold text-teal-500">Malang Young Innovators</span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold text-teal-500">Award</span> 2023 in the field of Technology. <br/>
                  <br/>
                 • &nbsp; Participant in the 2023 Lomba Kompetensi <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Siswa (LKS) in the field of &nbsp;
                 <span className="font-bold text-teal-500">
                    Data Science
                 </span>.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
