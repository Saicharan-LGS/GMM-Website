import Card from "../card/card";
import icon1 from "../assets/image.png";
import "./howItWorks.css";
const HowItWorks = ({ title }) => {
  return (
    <>
      <div className="space">
        {<h1 className="card-title">{title}</h1>}
        <div className="card-container">
          <Card
            heading="Book Demo"
            paragraph="Book a demo session to get detailed information on our hiring proposition"
            icon={icon1}
          />
          <Card
            heading="Book Demo"
            paragraph="Book a demo session to get detailed information on our hiring proposition"
            icon={icon1}
          />
          <Card
            heading="Book Demo"
            paragraph="Book a demo session to get detailed information on our hiring proposition"
            icon={icon1}
          />
          <Card
            heading="Book Demo"
            paragraph="Book a demo session to get detailed information on our hiring proposition"
            icon={icon1}
          />
        </div>{" "}
      </div>
    </>
  );
};

export default HowItWorks;
