import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const ProjectsSection = () => {
  const projects = [
    {
      name: "The ABC Buddy",
      description: "",
      image: "/",
      video: "https://www.youtube.com/embed/2kyABOgFhg4",
      github: "https://github.com/hqasmei/thankful-thoughts",
      link: "https://drive.google.com/file/d/17fBlY2uTpwpP--3mUTBJ-aHgMBGgPLtp/view?usp=drive_link",
    },
    {
      name: "Data Insights: Patterns, Predictions, and Decisions",
      description: "",
      image: "/data1.png",
      github: "https://colab.research.google.com/",
      link: "https://drive.google.com/file/d/16GYR5ziR4q3-ND_8X9xAnyHvbgitfd3N/view?usp=drive_link",
    },
    {
      name: "2D Pixel Platformer",
      description:
        "",
      image: "/allienparkour.png",
      github: "https://github.com/hqasmei/katorfamilyphotos",
      link: "https://drive.google.com/drive/folders/1DCwJKesXjl_y5Y4iYyaIRBns_FTWnLPm?usp=drive_link",
    },
    {
      name: "Library Website",
      description:
        "",
      image: "/librarywebsite.png",
      github: "https://github.com/baynobu/perpustakaan",
      link: "https://github.com/baynobu/perpustakaan",
    },
  ];

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {project.video ? (
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={project.video}
                          title={project.name}
                          allowFullScreen
                          width={464}
                          height={230}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </div>
                    ) : (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    )}
                  </div>

                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    {project.name === "The ABC Buddy" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Multi-Sensory Educational Games For Dyslexics. The ABC Buddy was showcased at the Malang Young Innovators Award (MYIA) 2023
                        on May 21, 2023, in the Auditorium MCC, Malang City.{" "}
                        <br />
                        <a
                          href={project.link}
                          className="text-teal-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Certificates
                        </a>
                        .
                      </p>
                    )}
                    {project.name === "Data Insights: Patterns, Predictions, and Decisions" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        This project was created for the LKS (Lomba Kompetensi Siswa) on February 15, 2023, and utilized real crawling <a href="https://docs.google.com/spreadsheets/d/18qHeNi4BtOM_30PeR8rFI4nJNbiTG5km/edit?usp=sharing&ouid=113415024310302736124&rtpof=true&sd=true" target="blank" className="text-teal-500 hover:underline">data</a> from the sales of the "TP-Link WR840N" 
                        product on the Tokopedia platform. It also utilized with a Linear Regression model. {" "}
                        <br />
                        <a href={project.link} className="text-teal-500 hover:underline" target="blank">
                          View Certificates
                        </a>
                        .
                      </p>
                    )}
                    {project.name !== "The ABC Buddy" && project.name !== "Data Insights: Patterns, Predictions, and Decisions" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    )}

                    {project.name === "2D Pixel Platformer" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        This game is Alien Parkour, a 2D platformer game made with the Godot Game Engine.{" "}
                        <br />
                        <a href={project.link} className="text-teal-500 hover:underline" target="blank">
                          Download The Allien Parkour!
                        </a>
                        .
                      </p>
                    )}

                    {project.name === "Library Website" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        This website was built using Microservices Architecture, with the frontend using ReactJS and the backend using NodeJS.{" "}
                        <br />
                        <a href={project.link} className="text-teal-500 hover:underline" target="blank">
                          Check it out!
                        </a>
                        .
                      </p>
                    )}

                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
      <br /><br /><br />
      <p className="text-center text-sm">When the Projects doesn't show up <span className="text-teal-500">Nothing</span>, Please Check your <span className="text-teal-500">Browser Versions</span> or try to use other Browser</p>
    </section>
  );
};

export default ProjectsSection;
