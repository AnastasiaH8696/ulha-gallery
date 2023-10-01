import React from "react";
import "./Home.css";

const Home = () => {
  const images = [
    { id: 1, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/1.jpeg?raw=true" },
    { id: 2, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/2.jpeg?raw=true" },
    { id: 3, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/3.jpeg?raw=true" },
    { id: 4, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/4.jpeg?raw=true" },
    { id: 5, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/5.jpeg?raw=true" },
    { id: 6, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/6.jpeg?raw=true" },
    { id: 7, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/7.jpeg?raw=true" },
    { id: 8, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/8.jpeg?raw=true" },
    { id: 9, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/9.jpeg?raw=true" },
    { id: 10, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/10.jpeg?raw=true" },
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div className="masonry">
        {images.map((image) => (
          <div key={image.id} className="item">
            <img src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;