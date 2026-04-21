import "server-only";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div>
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        About Me
      </h2>
      <p className="text-md leading-6 text-zinc-600 dark:text-zinc-400 py-4 font-medium">
        <i>
          <b>Technical UI Architect</b>
        </i>{" "}
        specializing in building <b>high-scale</b>, <b>responsive</b> web and
        server applications using modern Javascript frameworks. I am an expert
        in designing predictable <b>state management systems</b> and crafting
        highly <b>performant, accessible</b> interfaces. My architectural focus
        extends beyond the UI to the entire delivery lifecycle; I have
        experience engineering robust <b>CI/CD pipelines</b> that ensure
        seamless, automated deployments with integrated code checkpoint gatings.
        By leveraging sophisticated version control and collaborative workflows,
        I bridge the gap between complex frontend logic and{" "}
        <b>cloud infrastructure</b>. I am dedicated to setting technical
        standards that prioritize{" "}
        <b>
          modular architecture, bundle size optimization, and deployment
          velocity
        </b>{" "}
        to deliver world-class digital products.
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Templates
        </a>{" "} */}
      </p>
      <div className="text-base sm:flex-row text-zinc-600 dark:text-zinc-400">
        <div className="md:flex flex-col gap-4 text-base sm:flex-row">
          <div className="flex-1 py-1 text-md ">
            <span className="text-[#8AC776] font-bold">Name:</span>
            <span className="pl-2 font-medium">Badrinarayanan Sridharan </span>
          </div>
          <div className="flex-1 text-md">
            <span className="text-[#8AC776] font-bold">Birthday:</span>
            <span className="pl-2 font-medium">22nd Oct, 1985</span>
          </div>
        </div>
        <div className="text-base md:flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">Degree:</span>
            <span className="pl-2 font-medium">B.E, Computer Science</span>
          </div>
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">Experience:</span>
            <span className="pl-2 font-medium">17 years</span>
          </div>
        </div>
        <div className="text-base md:flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">Phone:</span>
            <span className="pl-2 font-medium">
              <a href="tel:+919789087148">9789087148</a>
            </span>
          </div>
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">E-mail:</span>
            <span className="pl-2 font-medium">
              <a
                href="mailto:sbadri_2001@yahoo.co.in"
                className="text-blue-500 hover:underline"
              >
                sbadri_2001@yahoo.co.in
              </a>
            </span>
          </div>
        </div>
        <div className="text-base md:flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">Location:</span>
            <span className="pl-2 font-medium">Chennai</span>
          </div>
          <div className="flex-1 py-1 text-md">
            <span className="text-[#8AC776] font-bold">Role:</span>
            <span className="pl-2 font-medium">
              Full-stack web / UI Architect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
