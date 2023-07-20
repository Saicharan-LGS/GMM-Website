import "./index.css"
const BannerLeft = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section className="section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="img" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="img" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="img" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { BannerLeft };
  