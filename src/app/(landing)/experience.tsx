import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        Experience
      </h2>
      <div className="py-4 text-zinc-600 dark:text-zinc-400 ">
        <div>
          <div className="text-base font-bold pb-1 text-black dark:text-red-50">
            GlobalLogic
          </div>
          <div className="text-base font-medium text-black dark:text-red-50">
            Solutions Architect | Dec 2023 - June 2025
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400 py-2">
            I worked at GlobalLogic as a Solutions Architect, bringing over 16
            years of experience in frontend architecture and software
            engineering. In this role, I am responsible for designing and
            implementing scalable, high-performance web applications for our
            clients across various industries. I leverage my expertise in React,
            Next.js, and modern frontend technologies to create innovative
            solutions that meet complex business requirements. Additionally, I
            established robust CI/CD pipelines on AWS, facilitating automated
            deployments and enhancing delivery velocity. Through collaborative
            workflows on GitHub, I bridged the gap between frontend logic and
            cloud infrastructure, consistently delivering world-class digital
            products that met stringent technical standards for modularity and
            optimization.
          </div>
        </div>
        <div>
          <div className="text-base font-bold pb-1 text-black dark:text-red-50">
            Cognizant Technology Solutions
          </div>
          <div className="text-base font-medium text-black dark:text-red-50">
            UI Architect & Principal Software Engineer | May 2007 - Mar 2023
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400 py-2">
            Played a pivotal role in architecting and delivering high-scale,
            responsive web applications for Fortune 500 clients across telecom,
            marketing, and financial services domains. As a Solutions Architect
            and Principal Software Engineer, I led the design and implementation
            of complex frontend architectures using React, Angular, Java,
            ensuring optimal performance and accessibility. My expertise in
            state management with Redux contributed to the development of highly
            performant interfaces. My focus is on delivering world-class digital
            products by establishing technical standards for modular
            architecture, optimizing bundle sizes, and ensuring seamless
            deployment processes. Through collaboration with cross-functional
            teams and clients, I aim to drive successful project outcomes and
            contribute to the growth and success of the organization.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
