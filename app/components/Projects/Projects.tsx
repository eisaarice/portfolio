"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "./Projects.css";

interface ProjectsProps {}
const Projects: React.FC<ProjectsProps> = () => {
  const { scrollY } = useScroll();

  const [scrollRange1, setScrollRange1] = useState([0, 0]);
  const [scrollRange2, setScrollRange2] = useState([0, 0]);
  const [scrollRange3, setScrollRange3] = useState([0, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      // - 1600
      if (width >= 320 && width < 500) {
        setScrollRange1([5400, 7000]);

        setScrollRange2([7300, 8900]);

        setScrollRange3([9100, 10700]);
      } else if (width >= 500 && width < 640) {
        setScrollRange1([4100, 5700]);

        setScrollRange2([5700, 7400]);

        setScrollRange3([7100, 8700]);
      } else if (width >= 640 && width < 1024) {
        setScrollRange1([3750, 5350]);

        setScrollRange2([5200, 6800]);

        setScrollRange3([6500, 8100]);
      } else if (width >= 1024 && width < 1280) {
        setScrollRange1([3500, 5100]);

        setScrollRange2([4700, 6300]);

        setScrollRange3([5850, 7450]);
      } else if (width >= 1280 && width < 1536) {
        setScrollRange1([3100, 4700]);

        setScrollRange2([4350, 5950]);

        setScrollRange3([5300, 6900]);
      } else {
        // width >= 1536
        setScrollRange1([3100, 4700]);

        setScrollRange2([4275, 5875]);

        setScrollRange3([5425, 7025]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const y1 = useTransform(scrollY, scrollRange1, ["100%", "-100%"]);
  const rotate1 = useTransform(scrollY, scrollRange1, [5, -5]);

  const y2 = useTransform(scrollY, scrollRange2, ["100%", "-100%"]);
  const rotate2 = useTransform(scrollY, scrollRange2, [-5, 5]);

  const y3 = useTransform(scrollY, scrollRange3, ["100%", "-100%"]);
  const rotate3 = useTransform(scrollY, scrollRange3, [5, -5]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-48 xl:gap-y-[500px] overflow-visible pt-96">
      {/* SELECTED PROJECTS */}
      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3
          flex justify-center items-center mx-auto
          -ml-14 xs:-ml-2 sm:ml-auto
          w-[800px] xs:w-[470px] sm:w-[580px] xl:w-[875px] 2xl:w-[975px]"
          style={{ y: y1, rotate: rotate1 }}
        >
          <Image src="/images/cc.png" alt="CC" height={1469} width={2432} />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.codeconductor.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">🤖 code conductor</p>

              <motion.div
                className="h-[1px] bg-black opacity-50"
                initial={{ width: 0 }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </div>

            <motion.div
              className="-mb-1 ml-5 flex-shrink-0"
              initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              for a group project, some classmates and i made an{" "}
              <span className="font-semibold">online platform</span> that lets
              people brainstorm and visualize custom algorithms easily
            </p>

            <p className="font-light opacity-75 text-2xl">
              we used <span className="font-semibold">git</span> and{" "}
              <span className="font-semibold">github</span> to work
              simultaneously and and our leader assigned issues to each of us so
              that we could progress incrementally
            </p>

            <p className="font-light opacity-75 text-2xl">
              blocks consisting of code type and description are properly
              indented and are drag-and-drop-able to make designing the
              algorithm easy and simple
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react.js
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                typescript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                material ui
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 
          flex justify-center items-center mx-auto -mt-20 sm:mb-12 xl:mb-0
          w-[310px] sm:w-[400px]"
          style={{ y: y2, rotate: rotate2 }}
        >
          <Image src="/images/iwd.png" alt="IWD" height={1716} width={814} />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 xl:my-auto">
          <motion.a
            className="inline-flex items-center"
            href="https://www.iwdsummit.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">
                👩 international women&apos;s day summit
              </p>

              <motion.div
                className="h-[1px] bg-black opacity-50"
                initial={{ width: 0 }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </div>

            <motion.div
              className="-mb-1 ml-5 flex-shrink-0"
              initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              for this conference, students at <span>GDG</span> made a website
              using <span className="font-semibold">react</span>,{" "}
              <span className="font-semibold">git and github</span>, and{" "}
              <span className="font-semibold">tailwind css</span> to bundle
              registration and information for over 200 conference attendees
            </p>

            <p className="font-light opacity-75 text-2xl">
              <span className="font-semibold">responsive design</span> was
              applied to make sure that a smooth experience was present across
              various devices and screen sizes
            </p>

            <p className="font-light opacity-75 text-2xl">
              to follow best coding practices,{" "}
              <span className="font-semibold">reusable components</span> were
              designed and give us an easier time maintening consistency across
              the application
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react.js
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                javascript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                tailwind css
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-x-24 xl:my-auto">
        <motion.div
          className="row-start-1 row-end-2 col-start-1 col-end-2 xl:col-start-2 xl:col-end-3 
          flex justify-center items-center mx-auto -mt-20 sm:mb-12 xl:mb-0 xl:-mr-0 xl:-mt-32
          w-[310px] sm:w-[400px]"
          style={{ y: y3, rotate: rotate3 }}
        >
          <Image src="/images/hd3.png" alt="HD3" height={1716} width={854} />
        </motion.div>

        <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 col-start-1 col-end-2">
          <motion.a
            className="inline-flex items-center"
            href="https://www.hackdearborn.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
          >
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl">
                🧑‍💻 hack{" "}
                <span className="inline-flex flex-shrink-0">dearborn 3</span>
              </p>

              <motion.div
                className="h-[1px] bg-black opacity-50"
                initial={{ width: 0 }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </div>

            <motion.div
              className="-mb-1 ml-5 rounded-full flex-shrink-0"
              initial={{
                rotate: 0,
                x: 0,
                y: 0,
                scale: 1,
              }}
              variants={{
                hover: {
                  rotate: -20,
                  x: 5,
                  y: -5,
                  scale: 1.1,

                  transition: { duration: 0.25, delay: 0.05 },
                },
              }}
            >
              <Image
                height={35}
                width={35}
                src={"/arrow-circle-right.svg"}
                alt=""
              />
            </motion.div>
          </motion.a>

          <div className="flex flex-col mt-10 mb-0 gap-y-8">
            <p className="font-light opacity-75 text-2xl">
              university club made an <span className="font-semibold">app</span>{" "}
              and a <span className="font-semibold">website</span> for our
              school&apos;s annual hackathon, which were used by over 250
              attendees for registration, information display, and check-in
            </p>

            <p className="font-light opacity-75 text-2xl">
              wireframe mockups were translated into{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">user-friendly interfaces</span>{" "}
              with appealing and engaging designs
            </p>

            <p className="font-light opacity-75 text-2xl">
              <span className="font-semibold">supabase</span> was used for the
              backend to take advantage of its database tables, edge functions,
              and simple authentication features
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                react native
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                typescript
              </p>

              <p className="font-extralight p-2 bg-white rounded-xl shadow-sm">
                supabase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER WORKS */}
      <div className="w-full flex flex-col items-center"></div>
    </div>
  );
};

export default Projects;
