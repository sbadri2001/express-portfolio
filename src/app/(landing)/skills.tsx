import "server-only";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="">
      <h2 className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-1/4 after:py-0.5 after:bg-[#8AC776] max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-red-50">
        Skills
      </h2>
      <div className="text-base py-4 leading-6 text-zinc-600 dark:text-zinc-400">
        <ul className="list-disc">
          <li>
            Javascript, ES6+, Typescript, jQuery, HTML5, CSS3, Sass, Tailwind
            CSS, Material-UI etc.
          </li>
          <li>
            React, Next.js, Angular, Vue.js, Redux, React query, Unit Testing,
            code coverage
          </li>
          <li>Libraries like Axios, AG-Grid, High-charts, Google Maps etc. </li>
          <li>
            Node.js, Express.js, MongoDB, ORM, API development, Security
            etc.{" "}
          </li>
          <li>
            Performance optimization, code splitting, lazy loading, bundling,
            SSR, SSG, Server components, Micro-frontends, caching, reverse proxy
            etc.
          </li>
          <li>
            Integration with CI/CD pipelines like AWS code commit, code build
            and deploy, monitoring & analytics tools like Kibana, Grafana,
            Elastic search, Glass box, Content square, Head spin, Github,
            Docker, npm etc.
          </li>
          <li>
            Project management, Scrum, Agile, Architecture design, HLD & LLD
            preparation, Pre-sales, Solutioning, Estimation, RL etc.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
