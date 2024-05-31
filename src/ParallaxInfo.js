import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import "./ParallaxInfo.css";
const ParallaxInfo = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/assets/parallax_bg.png", speed: 20 }]}
      className="aspect-[2/1] parallaxBannerImg"
    >
      <motion.div
        className="palTextBox"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img
          className="palTextImg"
          src="/assets/parallax_text.png"
          alt="textLogo"
        />
      </motion.div>
    </ParallaxBanner>
  );
};
export default ParallaxInfo;
