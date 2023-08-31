import React from 'react';
import './index.css'; // Import your CSS file for styling

const BannerLeft = ({ images, speed = 5000 }) => {
  return (
    <div className="leftinner">
      <div className="leftwrapper">
        {[...Array(3)].map((_, index) => (
          <section className="leftsection" style={{ "--speed": `${speed}ms` }} key={index}>
            {images.map(({ id, image }) => (
              <div className="leftimage" key={id}>
                <img className="leftimg" src={image} alt={id} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { BannerLeft };
