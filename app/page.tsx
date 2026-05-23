"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { motion } from "framer-motion";

const SectionReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <SectionReveal>
          <Grid />
        </SectionReveal>
        <SectionReveal>
          <RecentProjects />
        </SectionReveal>
        <SectionReveal>
          <Clients />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Approach />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </div>
    </main>
  );
};

export default Home;
