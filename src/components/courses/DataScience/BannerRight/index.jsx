import React from 'react';
import './style.css'; // Import your CSS file for styling

const BannerRight = ({ images, speed = 1000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        {[...Array(3)].map((_, index) => (
          <section className="section" style={{ "--speed": `${speed}ms` }} key={index}>
            {images.map(({ id, image }) => (
              <div className="imageright" key={id}>
                <img className="imgright" src={image} alt={id} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { BannerRight };
