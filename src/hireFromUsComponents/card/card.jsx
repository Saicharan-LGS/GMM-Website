import "./card.css";

const Card = ({ heading, paragraph, icon }) => {
  return (
    <>
      <div className="card">
        <img src={icon} alt="" />
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default Card;
