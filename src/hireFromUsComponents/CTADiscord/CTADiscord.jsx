import "./ctaDiscord.css";
import discordimg from "../assets/discord.png";

const CTADiscord = () => {
  return (
    <>
      <section className="ctaDiscord-section flex">
        <div className="cta-text">
          <h1>Learning is better with AlmaBetter Community</h1>
          <p>
            Join a community of serious & passionate tech folks, students,
            mentors and coaches to accelerate your career.
          </p>

          <button className="ctaDiscordBtn">
            <img src="https://www.pinterest.com/pin/702280135623060680/" alt=""/> <p>JOIN OUR DISCORD</p>
          </button>
        </div>
        <img className="discord-image" src={discordimg} alt="" />
      </section>
    </>
  );
};

export default CTADiscord;
