import Image from "next/image";
import AboutMe from "./aboutme.tsx";
import Skills from "./skills.tsx";
import Experience from "./experience.tsx";
import Projects from "./projects.tsx";

export default function Home() {
  return (
    <main className="md:flex flex-column md:flex-row flex-1 items-stretch justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="position-sticky top-1 sm:w-2xs py-4 md:py-12 px-6 md:px-8 bg-white dark:bg-black md:mr-4">
        <Image
          className="py-4 object-cover"
          src="/aboutme.jpeg"
          alt="Image of Badrinarayanan Sridharan"
          width={250}
          height={280}
          priority
        />
        <div className="text-3xl font-bold">Badrinarayanan Sridharan</div>
      </div>
      <div className="max-w-3xl py-8 md:py-12 px-6 md:px-12 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}
