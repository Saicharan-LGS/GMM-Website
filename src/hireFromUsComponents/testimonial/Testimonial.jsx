import { useState } from "react";
import dimage from "../assets/Untitled_1_161f1909de_65fded8c77.png";
import Card from "../card/card";
import "./testimonial.css";
const Testimonials = () => {
  const [data, setData] = useState([
    { img: dimage, text: "this is a simple tesing text for this website " },
    { img: dimage, text: "this is a simple tesing text for this website " },
    { img: dimage, text: "this is a simple tesing text for this website " },
    { img: dimage, text: "this is a simple tesing text for this website " },
  ]);
  return (
    <>
      <h1 className="news">AlmaBetter in News</h1>

      <div className="card-container">
        {data.map((card) => {
          return <Card icon={card.img} paragraph={card.text} />;
        })}
        {/* {data.map(card =>
        <Card icon={card.img} paragraph={card.text}/>

    )} */}
      </div>
    </>
  );
};

export default Testimonials;
