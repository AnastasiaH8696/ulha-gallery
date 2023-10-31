import React from "react";
import "./Home.css";

const Home = () => {
  const images = [
    { id: 1, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/violet_flowers.jpeg?raw=true" },
    { id: 2, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/autumn.jpeg?raw=true" },
    { id: 3, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/jerusalem.jpeg?raw=true" },
    { id: 5, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/birds.jpeg?raw=true" },
    { id: 6, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/girl.jpeg?raw=true" },
    { id: 8, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/guitar.jpeg?raw=true" },
    { id: 9, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/lily.jpeg?raw=true" },
    { id: 10, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/mandala_pink.jpeg?raw=true" },
    { id: 11, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/mandala_blue.jpeg?raw=true" },
    { id: 12, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/lily_big.jpeg?raw=true" },
    { id: 13, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/granades.jpeg?raw=true" },
    { id: 14, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/grape.jpeg?raw=true" },
    { id: 15, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/teena.jpeg?raw=true" },
    { id: 16, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/olives.jpeg?raw=true" },
    { id: 17, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/db/file_storage/granade.jpeg?raw=true" },
  ];

  return (
    <div>
      <div className="header"></div>
      <div className="masonry">
        {images.map((image) => (
          <div key={image.id} className="item">
            <img src={image.src} alt={`Image ${image.id}`} />
            <div className="image-name">{`Image ${image.id}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;