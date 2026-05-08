"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import SectionHeader from "../ui/sectionHeader";

const featuredProjects = [
  {
    label: "featured project 01",
    title: "trophy build one",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. integer posuere, sem at blandit aliquet, mauris lorem dapibus velit, non facilisis arcu metus vel nibh.",
  },
  {
    label: "featured project 02",
    title: "trophy build two",
    desc: "sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  },
  {
    label: "featured project 03",
    title: "trophy build three",
    desc: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
  },
];

const FeaturedProject = ({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc: string;
}) => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [-500, 0, 500]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.5, 1, 0.5, 0],
  );

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [500, 0, -500]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.5, 1, 0.5, 0],
  );

  return (
    <div ref={projectRef} className="relative h-[145vh] sm:h-[130vh]">
      <div className="sticky top-20 h-150 grid grid-cols-1 gap-x-8 items-center lg:grid-cols-2 bg-red-300">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-xl"
        >
          <p className="text-xs tracking-[0.24em] uppercase text-neutral-500">
            {label}
          </p>

          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
            {title}
          </h3>

          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            {desc}
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, opacity: imageOpacity }}>
          <div className="ml-auto w-full max-w-xl h-80 sm:h-96 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-black" />
        </motion.div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "hack dearborn",
    emoji: "👾",
    desc: "the webpage and mobile app for uofm - dearborn's annual hackathon.",
    link: "https://www.hackdearborn.org/",
    skills: ["React", "React Native", "Supabase"],
  },
  {
    title: "bhm summit",
    emoji: "👨🏿‍💻",

    desc: "information hub for a 2025 black history month conference held in detroit.",
    img: "/images/bhm.png",
    link: "https://gdg-summit-webiste.vercel.app/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "iwd summit",
    emoji: "👩🏼‍💻",

    desc: "information hub for a 2024 international women's day conference held in detroit.",
    img: "/images/iwd.png",
    link: "https://www.iwdsummit.com/",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "code conductor",
    emoji: "🤖",
    desc: "an interactive platform where anyone can design and visualize algorithms.",
    img: "/images/cc.png",
    link: "https://www.codeconductor.org/",
    skills: ["React", "TypeScript", "Material UI"],
  },
];

const Project = ({
  title,
  emoji,
  desc,
  link,
  skills,
}: {
  title: string;
  emoji: string;
  desc: string;
  link: string;
  skills: string[];
}) => {
  return (
    <motion.a
      className="flex flex-col
      border rounded-lg p-4
      border-neutral-200 dark:border-neutral-800
      hover:border-black dark:hover:border-white"
      // this is being overriden
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="link"
      initial={{ scale: 1 }}
      variants={{
        link: { scale: 1.025, cursor: "pointer" },
      }}
    >
      <div className="flex justify-between mb-2">
        <p className="text-5xl -ml-1">{emoji}</p>

        <motion.p
          className="text-xl"
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          variants={{ link: { opacity: 1, scale: 1.05, x: 2, y: -2 } }}
        >
          ↗
        </motion.p>
      </div>

      <h3 className="font-medium text-xl">{title}</h3>

      <p className="mt-2 pb-6">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, i) => (
          <p
            key={i}
            className="text-xs text-neutral-400 px-2 py-1
            rounded-full border border-neutral-200 dark:border-neutral-800"
          >
            {skill}
          </p>
        ))}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader emoji="💻" title="projects" />

      <div>
        {featuredProjects.map((project) => (
          <FeaturedProject
            key={project.label}
            label={project.label}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((mp, i) => (
          <Project
            key={i}
            title={mp.title}
            emoji={mp.emoji}
            desc={mp.desc}
            link={mp.link}
            skills={mp.skills}
          />
        ))}
      </div>

      <p className="mt-12 mx-auto text-center text-neutral-500 italic">
        see in-progress projects and more details on my{" "}
        <a
          className="font-bold hover:font-black"
          href="https://github.com/eisaa-rice"
          target="_blank"
        >
          github
        </a>
        .
      </p>
    </section>
  );
};

export default Projects;
