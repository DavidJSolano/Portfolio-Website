import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, subtitle = "Work in Progress" }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="!relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Eager to embrace new challenges and technologies, I thrive in
          collaborative environments and am dedicated to making a positive
          impact through the art of programming.
        </p>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Continuously Learning.
          </div>
          <a
            className="max-w-[400px] max-h-[400px]"
            href="https://github.com/DavidJSolano/WeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              title="Weather App"
              subtitle="A JS-oriented app that utilizes the Open Weather API to display the weather at any given city"
            ></Project>
          </a>
          <a
            className="max-w-[400px] max-h-[400px]"
            href="https://github.com/DavidJSolano/BreastCancerPredictor"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              title="Breast Cancer Predictor"
              subtitle="A machine learning script that predicts whether a breast cell is malignant or benign (Mounted on Google Colabs)"
            ></Project>
          </a>
          {/* Row 2 */}
          <a
            className="max-w-[400px] max-h-[400px]"
            href="https://github.com/DavidJSolano/acmcsuf.com"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              title="ACM CSUF"
              subtitle="Contributor to the OSS project, acmcsuf.com. The largest programming community at CSUF's website!"
            ></Project>
          </a>
          <a
            className="max-w-[400px] max-h-[400px]"
            href="https://github.com/DavidJSolano/pathfind"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              title="Path find"
              subtitle="A path finding visualizer showing popular algorithms such as Dijkstra's SPA and more!"
            ></Project>
          </a>
          <Project title="WIP"></Project>
          {/* Row 3 */}
          <Project title="WIP"></Project>
          <Project title="WIP"></Project>
          <div
            className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            All the time.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
