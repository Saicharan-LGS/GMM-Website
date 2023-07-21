import "./index.css"
const BannerLeft = ({ images, speed = 5000 }) => {
    return (
      <div className="leftinner">
        <div className="leftwrapper">
          <section className="leftsection" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="leftimage" key={id}>
                <img className="leftimg" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="leftsection" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="leftimage" key={id}>
                <img className="leftimg" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="leftsection" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="leftimage" key={id}>
                <img className="leftimg" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { BannerLeft };
  