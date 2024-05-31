import "./BusinessOper.css";

const BusinessOper = () => {
  const locationKakao = () => {
    window.open("https://pf.kakao.com/_XlWXG");
  };
  return (
    <div className="bg flex-set pad-bt-top">
      <span className="main-font">
        <img
          className="whiteLogo"
          src="assets/white_logo.png"
          alt="watermark"
        />
        창업문의
      </span>
      <button className="bt-set" onClick={locationKakao}>
        문의하기
      </button>
    </div>
  );
};

export default BusinessOper;
