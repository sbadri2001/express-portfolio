import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div>
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        About Me
      </h2>
      <p className="text-md leading-6 text-zinc-600 dark:text-zinc-400 py-4">
        Technical UI Architect specializing in building high-scale, responsive
        web applications using React and Next.js. I am an expert in designing
        predictable state management systems with Redux and crafting highly
        performant, Accessible interfaces using Tailwind CSS. My architectural
        focus extends beyond the UI to the entire delivery lifecycle; I have
        experience setting up custom configurations for optimal asset bundling
        and engineering robust AWS CI/CD pipelines that ensure seamless,
        automated deployments. By leveraging GitHub for sophisticated version
        control and collaborative workflows, I bridge the gap between complex
        frontend logic and cloud infrastructure. I am dedicated to setting
        technical standards that prioritize modular architecture, bundle size
        optimization, and deployment velocity to deliver world-class digital
        products.
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Templates
        </a>{" "} */}
      </p>
      <div className="text-base font-medium sm:flex-row">
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">Name:</span>
            <span className="text-sm pl-2">Badrinarayanan Sridharan </span>
          </div>
          <div className="flex-1">
            <span className="text-[#8AC776] text-md font-bold">Birthday:</span>
            <span className="text-sm pl-2">22nd Oct, 1985</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">Degree:</span>
            <span className="text-sm pl-2">B.E, Computer Science</span>
          </div>
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">
              Experience:
            </span>
            <span className="text-sm pl-2">17 years</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">Phone:</span>
            <span className="text-sm pl-2">9789087148</span>
          </div>
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">E-mail:</span>
            <span className="text-sm pl-2">sbadri_2001@yahoo.co.in</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">Location:</span>
            <span className="text-sm pl-2">Chennai</span>
          </div>
          <div className="flex-1 py-1">
            <span className="text-[#8AC776] text-md font-bold">Role:</span>
            <span className="text-sm pl-2">
              Full-stack web developer, UI Architect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
