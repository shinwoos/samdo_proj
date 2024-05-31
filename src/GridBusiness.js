import "./GridBusiness.css";
import { motion } from "framer-motion";

const GridBusiness = () => {
  return (
    <div className="flexBox mt-10">
      <motion.div
        className="flexBox"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img
          className="gridPicture"
          src="/assets/business_header.png"
          alt="businessLogo"
        />
      </motion.div>
      <motion.div
        className="flexBox"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
      >
        <img className="gridPicture" src="/assets/grid.png" alt="gridLogo" />
      </motion.div>
      <motion.div
        className="flexBoxSide wd-set"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
      >
        <span className="bold-6">※ 별도 공사 항목</span>
        <span className="bold-5">
          철거 공사/ 외장 공사 / 데크 공사/ 소방관련 / 전기증설(배전반,
          콘트롤박스 포함) / 가스 공사(승압 등) / 닥트 입상 / 화장실 / 간판
          (내부사인물 포함, 외부P.0.P, 현수막 ) / 순번대기세트(선택) / 어닝 /
          인터넷 / 전화/ 음향(앰프/스피커 ) / POS / 키오스크 or 테이블오더 /
          CCTV / 에어컨 / 순간온수기 / 인허가비용 등 / 석면공사 / 그 외점주
          요청공사
        </span>
        <span className="bold-5">※ 자체공사시 감리비가 별도 청구 됩니다.</span>
        <span className="bold-5">※ 로열티 - 20만원 (기준평수에 한함 )</span>
        <span className="bold-5">
          ※ 기준 예시금액으로 매장의 특수한 사항에 따라 변경될 수 있습니다.
        </span>
        <span className="bold-5">
          ※ 지역이 지방인 경우 지방경비가 추가로 발생될 수 있습니다.
        </span>
        <span className="bold-5">
          ※ 66m (20평) 미만은 평당 단가가 아닌 1식 공사로 66m²(20평)
          기준금액으로 적용한다.
        </span>
        <span className="bold-5">
          ※ 공사비용은 점포 및 상황에 따라 변동이 있을수 있습니다. 보다 자세한
          사항은 본사로 문의 부탁드립니다.
        </span>
      </motion.div>
    </div>
  );
};

export default GridBusiness;
