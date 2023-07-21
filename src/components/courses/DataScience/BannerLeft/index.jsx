import "./index.css"
const BannerLeft = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section className="section" style={{ "--speed": `${speed}ms` }}>
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
  
  export { BannerLeft };