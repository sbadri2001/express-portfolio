import "server-only";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="">
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        Experience
      </h2>
      <div className="py-4 text-zinc-600 dark:text-zinc-400 md:relative after:content-[''] after:absolute after:-left-2 after:top-5 after:h-[calc(100%-40px)] after:w-px after:bg-[#8AC776] md:px-4">
        <div>
          <div className="text-base font-bold pb-1 text-black dark:text-red-50 md:relative after:content-['->'] after:absolute after:-left-6 after:top-0 after:text-[#8AC776]">
            Global Logic
          </div>
          <div className="text-base font-medium text-black dark:text-red-50">
            Solutions Architect | Dec 2023 - June 2025
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400 py-2">
            I architect scalable enterprise frontend solutions across telecom
            and Industrial IoT, powering digital sales and real-time monitoring
            platforms. I lead and mentor 100+ engineers, delivering across
            multiple Agile teams. I design micro-frontend architectures and
            build high-performance SPAs using modern JavaScript frameworks. I
            develop real-time, data-driven dashboards integrating IoT systems
            and APIs, ensuring performance at scale. I enforce strong
            engineering standards across quality, accessibility, security, and
            testing, while enabling CI/CD on the cloud. I collaborate
            cross-functionally to align technology with business goals and
            continuously optimize user experience and system performance.
          </div>
        </div>
        <div>
          <div className="text-base font-bold pb-1 text-black dark:text-red-50 md:relative after:content-['->'] after:absolute after:-left-6 after:top-0 after:text-[#8AC776]">
            Cognizant Technology Solutions
          </div>
          <div className="text-base font-medium text-black dark:text-red-50">
            UI Architect & Principal Software Engineer | May 2007 - Mar 2023
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400 py-2">
            I architect and deliver high-scale, responsive web applications for
            Fortune 500 clients across telecom, sales, marketing, and financial
            services. As a Solutions Architect and Principal Engineer, I lead
            end-to-end system design, ensuring performance, accessibility, and
            scalability. I contribute to pre-sales through stakeholder
            engagement, solutioning, estimations, and bids, while partnering
            with business and management in product discussions. I drive
            innovation, establish strong technical standards, and enable
            efficient delivery processes. I also provide thought leadership and
            mentorship, collaborating cross-functionally to achieve business
            outcomes and organizational growth.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
