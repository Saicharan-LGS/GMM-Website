import "./index.css";
import Lottie from "lottie-react";

import WhatsappTime from "./WhatsappTime.json";

const watsappUrl = process.env.REACT_APP_WHATSAPPLINK;

const Whatsapp = () => {
  return (
    <a
      className="whatsapp-button"
      href={watsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <Lottie
        className="whatsapp-icon"
        loop={true}
        animationData={WhatsappTime}
      />
    </a>
  );
};

export default Whatsapp;
