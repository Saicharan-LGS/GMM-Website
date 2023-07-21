import icon1 from "../assets/image.png";
import Card from "../card/card";
import "./placementTeam.css";
import PlacementTeamForm from "../plaementTeamForm/placementTeamForm";

const handleSubmit = (e) => {
  e.preventDefault();
};

const PlacementTeam = ({ title }) => {
  return (
    <>
      <section className="placement-team-section flex">
        <div className="placement-text">
          <h1>{title}</h1>
          <div className="placement-cards">
            <div className="card-row">
              <Card
                paragraph="Passed intensive Tech assessments"
                icon={icon1}
              />
              <Card
                paragraph="Passed intensive Tech assessments"
                icon={icon1}
              />
            </div>
            <div className="card-row">
              <Card
                paragraph="Passed intensive Tech assessments"
                icon={icon1}
              />
              <Card
                paragraph="Passed intensive Tech assessments"
                icon={icon1}
              />
            </div>
          </div>
        </div>
        <div className="placement-form-container">
          <PlacementTeamForm
            title="Schedule a demo call with our placement team"
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
};

export default PlacementTeam;
