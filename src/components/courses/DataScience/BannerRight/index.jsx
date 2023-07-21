import "./style.css"
const BannerRight = ({ images, speed = 1000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section className="section"  style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="bannerimage" key={id}>
                <img className="bannerimg" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section"  style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="bannerimage" key={id}>
                <img className="bannerimg" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="bannerimage" key={id}>
                <img className="bannerimg" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { BannerRight };