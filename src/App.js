import "./App.css";
import "./AppAnimation.css";
import "./AppScreen.css";
import { motion } from "framer-motion";
import Graph from "./Graph.js";
import ParallaxInfo from "./ParallaxInfo.js";
import { ParallaxProvider } from "react-scroll-parallax";
import ParaText from "./ParaText.js";
import SalesCap from "./SalesCap.js";
import GridBusiness from "./GridBusiness.js";
import LabelComponent from "./LabelComponent.js";
import BusinessOper from "./BusinessOper.js";

function App() {
  const mentObj = [
    {
      alt: "ment1",
      src: "/assets/three_ment1_mody.png",
    },
    {
      alt: "ment2",
      src: "/assets/three_ment2_mody.png",
    },
    {
      alt: "ment3",
      src: "/assets/three_ment3_mody.png",
    },
  ];

  let transitionItemCnt;
  let transitionItemArr = [];
  for (transitionItemCnt = 1; transitionItemCnt < 8; transitionItemCnt++) {
    const tranObj = {
      alt: "tran" + transitionItemCnt,
      img: `/assets/transition_item_${transitionItemCnt}.png`,
      key: "key" + transitionItemCnt,
    };
    transitionItemArr.push(tranObj);
  }

  const mentList = mentObj.map((item) => {
    return (
      <img className="mentImg" key={item.alt} src={item.src} alt={item.alt} />
    );
  });

  const mentMenuItemArr = transitionItemArr.map((item, idx) => {
    return (
      <div className={"mentItem" + idx + " mentItemAnimation"} key={item.key}>
        <img className="mentItemImg" src={item.img} alt={item.alt} />
      </div>
    );
  });

  transitionItemArr = transitionItemArr.map((item) => {
    return (
      <div key={item.key}>
        <img className="transitionItemImg" src={item.img} alt={item.alt} />
      </div>
    );
  });

  setTimeout(() => {
    const images = document.querySelector(".fadeOutLocation").childNodes;

    let index = 0; // 현재 보여지는 이미지의 인덱스
    const interval = 4000; // 이미지가 변경되는 간격 (밀리초)
    //
    function showNextImage() {
      //   // 현재 이미지의 투명도를 0으로 설정하여 숨김
      images[index].style.opacity = 0;

      //   // 다음 이미지의 투명도를 1로 설정하여 보임
      index = (index + 1) % images.length; // 인덱스를 다음 이미지로 업데이트
      images[index].style.opacity = 1;
      // }
    }
    // // 일정 간격으로 다음 이미지를 보여주는 함수를 호출
    setInterval(showNextImage, interval);
  }, 1000);

  return (
    <ParallaxProvider>
      <div className="frame">
        <div className="mainBox">
          <div className="logoPort">
            <img className="blueLogo" src="/assets/blue_logo.png" alt="Logo" />
          </div>
          <motion.div
            className="mainInfo"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            <img
              className="mainText"
              src="/assets/main_text.png"
              alt="mainText"
            />
            <img className="mainCap" src="/assets/main_cap.jpg" alt="mainCap" />
          </motion.div>
        </div>

        <div
          className="threeMentBackground"
          style={{ backgroundImage: `url(/assets/three_back.png)` }}
        >
          <div className="threeHeader">
            <img
              className="threeHeaderMent"
              src="/assets/logo_three_ment.png"
              alt="ThreeLogo"
            />
          </div>
          <motion.div
            className="threeMentBox"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 3,
            }}
          >
            {mentList}
          </motion.div>
        </div>

        <div style={{ position: "relative", backgroundColor: "#ffffff" }}>
          <motion.div
            className="menuMentBox"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            <img
              className="menuMent"
              src="/assets/ment_wide.png"
              alt="menuMent"
            />
          </motion.div>
          <div className="fadeOutLocation">{mentMenuItemArr}</div>
        </div>
        <div style={{ backgroundColor: "#ffffff" }}>
          <motion.div
            className="menuHeader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            <div className="menuHeaderLine">
              <hr />
            </div>
            <div>
              <span className="menuHeaderText">삼도숙성회</span>
              <span
                className="menuHeaderText"
                style={{ color: "#0f328c", paddingRight: "10px" }}
              >
                MENU
              </span>
            </div>
            <div className="menuHeaderLine">
              <hr />
            </div>
          </motion.div>
        </div>
        <div className="tranAni">
          <div className="tranImgBoxParent tranAnimation">
            <div className="transitionImgBox ">{transitionItemArr}</div>
            <div className="transitionImgBox ">{transitionItemArr}</div>
          </div>
        </div>
        <LabelComponent />
        <ParallaxInfo />
        <ParaText />
        <Graph />
      </div>
      <SalesCap />
      <GridBusiness />
      <BusinessOper />
      <div className="bottom-bar">
        <img
          className="blackLogo"
          src="assets/black_logo.png"
          alt="watermark"
        />
        <span className="pad-bottom-05">
          삼도숙성회 대표 조창기 사업자번호 :506-26-54630
        </span>
        <span className="pad-bottom-05">
          주소 경기도 수원시 영통구 영통로214번길 21, 103호
        </span>
        <span className="pad-bottom-05">mobile: 031.8019.8787</span>
      </div>
    </ParallaxProvider>
  );
}

export default App;
