"use client";
import { socials } from "@/utils/items";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Spacer from "@/components/Spacer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OtherProjects from "@/components/OtherProjects";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import CursorBlur from "@/components/CursorBlur";

const Home = () => {
  console.clear();
  const linkURL = "https://x.com/zyzer01";
  console.log(
    "%c🚀 Built by %cDavid Onifade 🚀 - " + linkURL,
    "color: red; font-size: 25px;",
    "font-weight: bold; font-size: 25px;"
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
    >
        <div className="flex justify-end mr-44 pointer-events-none">
          <div className="relative before:absolute md:before:h-[300px] md:before:w-[350px] before:h-[250px] before:w-[300px] before:right-0 after:right-0 md:before:-right-56 md:after:-right-56 before:rounded-full before:bg-gradient-radial before:from-secondary/50 before:to-primary/50 before:blur-2xl before:content-[''] after:absolute after:-z-0 md:after:h-[300px] md:after:w-[300px] after:h-[200px] after:w-[200px] after:bg-gradient-conic after:from-secondary/50 after:via-fuchsia-700/50 after:blur-2xl after:content-[''] z-[-1] animate-bg-gradient pointer-event-none"></div>
        </div>
        <NavBar />
      <div className="grid grid-cols-6 place-content-between px-8 md:px-0">
        <div className="justify-self-center">
          <div className="hidden md:flex flex-col space-y-8 justify-center items-center fixed top-0 bottom-0">
            {socials.map((item, index) => (
              <Link href={item.href} key={index} target="_blank">
                <p className="text-xl hover:scale-125 transition ease-in-out duration-300">
                  {item.icon}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <CursorBlur />
          <Hero />
          <Spacer />
          <About />
          <Spacer />
          <Experience />
          <Spacer />
          <Projects />
          <Spacer />
          <OtherProjects />
          <Spacer />
          <Footer />
          <Spacer />
          <Spacer />
        </div>
        <div>
          <div className="hidden md:flex justify-center items-center fixed top-0 bottom-0 z-0">
            <Link href="mailto:davidicfola@gmail.com">
              <p className="transform rotate-90 proggy text-xl">
                <span className="transition-all ease duration-300 hover:bg-clip-text text-bright hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary">
                  davidicfola@gmail.com
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
