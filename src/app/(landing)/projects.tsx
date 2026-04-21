import "server-only";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="">
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        Projects
      </h2>
      <div className="text-base py-2">
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            Verizon – Digital Sales
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                Own end-to-end architecture for Verizon Digital Sales platforms
                across telecom, 4G/5G, and home internet services.
              </li>
              <li>
                Mentor multiple core front-end teams, which has 40-50 engineers
                from grooming, HLD and LLD preparations, code reviews and
                technical guidance to delivery and production support.
              </li>
              <li>
                Enforce engineering standards for code quality, performance,
                accessibility, and security.
              </li>
              <li>
                Spear-head weekly and monthly stakeholder meetings, to discuss
                impediments in process, people, business and technology with
                actionable outcomes and follow-ups.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">
                  Architecture:
                </span>{" "}
                Micro-frontends, scalable SPA, SSR, Caching, modular UI systems
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Quality & Governance:
                </span>{" "}
                Pre-commit hooks, automated code quality checks, test coverage
                enforcement, accessibility (a11y), security best practices
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Methodologies:
                </span>{" "}
                Agile, Scrum, daily release automation processes
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Tools & Practices:
                </span>{" "}
                CI/CD with Jenkins, code checks with Github, Es-lint, Jest and
                RTL for unit testing, Istanbul for test coverage, axe for
                accessibility, Glassbox for debugging live user sessions, Kibana
                and Grafana for logging and performance monitoring,
                collaborative tools like Jira and Confluence.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            Hitachi – Aqua Tech - Real Time Dashboard
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                UI Architect for industrial automation, delivering web-based
                monitoring solutions for RO and Sewage Treatment plants.
              </li>
              <li>
                Built and led teams to deliver end-to-end real-time dashboards
                for IoT-driven systems.
              </li>
              <li>
                Designed scalable solutions for real-time data ingestion,
                visualization, and operational insights.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">IoT:</span> MQTT,
                data loggers, real-time data streaming
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Visualisation:
                </span>{" "}
                Interactive charts, high-performance grids, geo maps
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Architeture:</span>{" "}
                Real-time dashboards, scalable web applications, Token based
                authentication
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Domain:</span>{" "}
                Industrial automation systems
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            Apple - Vendor Management
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                Led modernization of a complex SPA from AngularJS to React,
                improving scalability and maintainability.
              </li>
              <li>
                Managed and scaled distributed onshore/offshore teams for
                effective delivery.
              </li>
              <li>
                Contributed to pre-sales through solutioning, estimations, and
                proposal development.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">Frontend:</span>{" "}
                AngularJS, React.js, Context API, SPA modernization, Dashboard
                development
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Visualisation:
                </span>{" "}
                Interactive AG-charts / AG-Grids for data summary and insights
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Delivery:</span>{" "}
                Distributed team management, Agile execution
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            Apple - Beats CMS
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                Designed and delivered complex CMS-driven applications with
                advanced content and media workflows.
              </li>
              <li>
                Developed drag-drop UI components for authoring and organizing
                content
              </li>
              <li>
                Developed video based media experiences with custom video
                players, and complex rendering and caching strategies for
                performance optimization.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">
                  CMS & Backend:
                </span>{" "}
                Adobe Experience manager (AEM), CQ queries, asset management
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Frontend:</span>{" "}
                Media-rich UIs with vanilla JS and React.js, custom video
                players with Video.js
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Domain:</span>{" "}
                Digital marketing platforms, content and media experience
                systems authentication
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            Apple - Sales and Marketing
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                Developed and lead multiple complex SPAs, both internal and
                customer-facing, for sales and marketing teams.
              </li>
              <li>
                Stakeholder and business engagement for requirement gathering,
                solutioning, estimations, and delivery planning.
              </li>
              <li>
                Collaborated with cross-functional agile teams to drive product
                development and ensure alignment with business objectives.
              </li>
              <li>
                Onsite-Offshore coordination and distributed team management for
                effective delivery.
              </li>
              <li>
                Request for proposals (RFP) response development, contributing
                to pre-sales efforts with solutioning, estimations, and proposal
                development.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">
                  Frontend & Backend:
                </span>{" "}
                Javascript, jQuery, Angular.js, Angular, AEM, React.js, Redux,
                thunks, Axios, Node.js, Express.js, Handlebars, Mustache.js,
                Grunt, Gulp, Webpack etc.
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Database:</span>{" "}
                MongoDB, AEM JCR repository, SQL databases
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Data & Integration:
                </span>{" "}
                JSON, Rest API
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Practices:</span>{" "}
                Agile development, Scrum, distributed team management, monolith
                architecture, code quality, mentoring
              </li>
            </ul>
          </div>
        </div>
        <div className="text-base">
          <div className="font-bold text-xl text-black dark:text-red-50 pt-4">
            E * Trade Financial - Equity Edge Online
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Roles and responsibilities:
            </div>
            <ul className="list-disc">
              <li>
                Full Stack Developer building enterprise applications using
                Java/J2EE and Javascript stack.
              </li>
              <li>
                Designed and developed complex accounting, valuation, and
                reporting engines and stock plan management applications.
              </li>
              <li>
                Mentored team members on SQL development, best practices, and
                design patterns.
              </li>
            </ul>
          </div>
          <div className="leading-6 text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-black dark:text-red-50 py-4">
              Technology and Practices:
            </div>
            <ul className="list-disc">
              <li>
                <span className="font-bold dark:text-red-50">Backend:</span>{" "}
                Java, J2EE, Spring, Hibernate, SOAP
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Database:</span>{" "}
                Oracle, SQL
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Frontend:</span>{" "}
                Rich UI development (HTML, JS/jQuery-based interfaces)
              </li>
              <li>
                <span className="font-bold dark:text-red-50">
                  Data & Integration:
                </span>{" "}
                XML, XSLT
              </li>
              <li>
                <span className="font-bold dark:text-red-50">Practices:</span>{" "}
                Design patterns, scalable architecture, code quality, mentoring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
