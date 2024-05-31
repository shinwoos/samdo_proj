import "./ParaText.css";
import { motion } from "framer-motion";

const ParaText = () => {
  return (
    <div className="black-bg">
      <motion.div
        className="black-bg flex-set1 pd-bot-top"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img
          className="doubleImage"
          src="/assets/double_image_1.png"
          alt="double1"
        />
        <img
          className="doubleImage"
          src="/assets/double_image_2.png"
          alt="double2"
        />
        <img
          className="doubleImage"
          src="/assets/double_image_3.png"
          alt="double3"
        />
      </motion.div>
    </div>
  );
};

export default ParaText;
