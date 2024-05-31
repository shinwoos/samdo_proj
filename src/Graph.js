import { motion } from "framer-motion";
import "./Graph.css";

const Graph = () => {
  return (
    <div className="graphBody">
      <motion.div
        className="graphHeader"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
      >
        <div className="graphTextBox" style={{ fontSize: "15px" }}>
          <span className="graphText">6시간 짧은 영업시간 대비 </span>
          <br />
          <span className="graphText graphTextSize">높은 매출 달성</span>
        </div>
      </motion.div>
      <div>
        <img
          className="graphMarkImg"
          src="./assets/samdo-logo.png"
          alt="backWaterMark"
        />
      </div>
      <motion.div
        className="graphStickBox"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 0.5,
        }}
      >
        <img
          className="graphStickImg"
          src="./assets/graph_stick.png"
          alt="graphCap"
        />
      </motion.div>
    </div>
  );
};

export default Graph;
