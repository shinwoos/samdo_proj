import "./SalesCap.css";
import { motion } from "framer-motion";

const SalesCap = () => {
  return (
    <div className="salesBox">
      <motion.div
        className="salesSon"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img
          className="sales_cap_set"
          src="/assets/salesHeader.png"
          alt="salesLogo"
        />
      </motion.div>
      <motion.div
        className="salesSon"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: -0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img
          className="sales_cap_set"
          src="/assets/sales_pic2.png"
          alt="salesLogo"
        />
      </motion.div>
    </div>
  );
};

export default SalesCap;
