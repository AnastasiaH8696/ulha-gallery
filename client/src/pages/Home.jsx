import React from "react";

const Home = () => {
  const images = [
    { id: 1, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/1.jpeg" },
    { id: 2, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/2.jpeg" },
    { id: 3, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/3.jpeg" },
    { id: 4, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/4.jpeg" },
    { id: 5, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/5.jpeg" },
    { id: 6, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/6.jpeg" },
    { id: 7, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/7.jpeg" },
    { id: 8, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/8.jpeg" },
    { id: 9, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/9.jpeg" },
    { id: 10, src: "https://github.com/AnastasiaH8696/ulha-gallery/blob/main/client/temp_resources/10.jpeg" },
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={`Image ${image.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;