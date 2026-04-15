import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        Projects
      </h2>
      <div className="text-base font-medium py-2">
        <div className="text-base font-medium">
          <div className="text-md font-bold py-4">
            Verizon – Digital Sales: July 2024 – June 2025
          </div>
          <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <ul className="list-disc">
              <li>
                Worked as an UI architect for a big team with 100+ developers
                for a telecom client and helping a team of 35-40 plus UI
                developers for multiple agile core teams.
              </li>
              <li>
                Responsible for development of core solutions and architecture
                support for Digital Sales portfolio of Verizon services like
                telecom lines, 4G/5G routers, home internet needs etc.
              </li>
              <li>
                Helped the team and clients achieve their delivery in an agile
                and process-oriented structure.
              </li>
              <li>
                Worked on evolving pre-commit hooks like test coverage,
                accessibility, security, quality etc. Established micro-frontend
                pattern to deliver multiple modules into singular end-user
                application.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base font-medium">
          <div className="text-md font-bold py-4">
            Hitachi – Aqua Tech Engineering Pte. - (HAQT): Dec 2023 - June 2024
          </div>
          <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <ul className="list-disc">
              <li>
                Worked as an UI architect for an industrial automation client
                Hitachi Aqua Tech for monitoring their RO and Sewage Treatment
                plants through a web portal.
              </li>
              <li>
                Responsible for putting together a complete team and delivering
                end-to-end solution for real time monitoring Dashboard & pages
                using MQTT protocol, IOT and data logger devices from sites.
              </li>
              <li>
                Developed interactive visualization solutions using charts,
                high-performant grids and geo maps.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
