import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./LabelComponent.css";

const LabelComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let labelArr = [];

  for (let i = 1; i < 7; i++) {
    let labelObj = {
      labelId: `label${i}`,
      labelSrc: `/assets/price_label_${i}.png`,
      idx: i,
    };
    labelArr.push(labelObj);
  }

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const renderLabel =
    windowWidth <= 768 ? (
      <div className="labelDeps_0">
        <motion.div
          className="parentLabel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <img className="labelBox" src="/assets/price_label_1.png" alt="1" />
          <img className="labelBox" src="/assets/price_label_2.png" alt="2" />
        </motion.div>
        <motion.div
          className="parentLabel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
          }}
        >
          <img className="labelBox" src="/assets/price_label_3.png" alt="3" />
          <img className="labelBox" src="/assets/price_label_4.png" alt="4" />
        </motion.div>
        <motion.div
          className="parentLabel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1.4,
          }}
        >
          <img className="labelBox" src="/assets/price_label_5.png" alt="5" />
          <img className="labelBox" src="/assets/price_label_6.png" alt="6" />
        </motion.div>
      </div>
    ) : (
      <div className="labelDeps_0">
        <motion.div
          className="parentLabel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <img className="labelBox" src="/assets/price_label_1.png" alt="1" />
          <img className="labelBox" src="/assets/price_label_2.png" alt="2" />
          <img className="labelBox" src="/assets/price_label_3.png" alt="3" />
        </motion.div>
        <motion.div
          className="parentLabel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
          }}
        >
          <img className="labelBox" src="/assets/price_label_4.png" alt="4" />
          <img className="labelBox" src="/assets/price_label_5.png" alt="5" />
          <img className="labelBox" src="/assets/price_label_6.png" alt="6" />
        </motion.div>
      </div>
    );

  return (
    <div className="LabelDiv">
      <div className="labelDeps_0">
        <img
          className="goldLabels"
          src="/assets/gold_text.png"
          alt="goldLabel"
        />
        <div>{renderLabel}</div>
      </div>
    </div>
  );
};

export default LabelComponent;
