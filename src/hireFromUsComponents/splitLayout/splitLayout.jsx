import "./splitLayout.css";
import Btn from "../btn/Btn";
const SplitLayout = ({ heading, paragraph, imgPath, btn, addClass }) => {
  return (
    <>
      <div className={addClass ? "grid left" : "grid"}>
        <div className="splitLayout-text">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          {/* <Btn>adhfh</Btn> */}
          {btn && <button>{btn}</button>}
        </div>
        <div className="splitLayout-image">
          <img src={imgPath} alt="" />
        </div>
      </div>

      {/* <div className=" grid  left">
            <div className="splitLayout-text">
              <h1>Hire top 1% Data Science talent</h1>
              <p>
                Build your Data & Engineering Team with industry ready top
                skilled tech talent.
              </p>
            </div>
            <div className="splitLayout-image ">
              <img src={img1} alt="" />
            </div>
          </div> */}
    </>
  );
};

export default SplitLayout;
