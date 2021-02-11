import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

/**
 * Component for the React Player carousel.
 * @component
 * @param {Object} props - The component props.
 * @param {ImageType[]} props.images - The array of images for the carousel.
 * @param {Object} props.options - The options for the carousel.
 * @returns {JSX.Element} The rendered component.
 */
const ReactPlayerCarousel = ({ images, options }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    if (images && images[0]) {
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <h1 className="header">Carousel</h1>
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <ReactPlayer
        className="react-player"
        playing
        controls
        onEnded={() => {
          handleSelectedImageChange(
            (selectedImageIndex + 1) % (images?.length || 1)
          );
        }}
        url={selectedImage?.url}
      />
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && 'carousel__image-selected'
                }`}
              >
                <h2 className="thumbnail-title">{image.title}</h2>
                {options.thumbnail && (
                  <ReactPlayer
                    url={image.url}
                    light
                    width="150px"
                    height="150px"
                    onClick={() => handleSelectedImageChange(idx)}
                    onClickPreview={() => handleSelectedImageChange(idx)}
                  />
                )}
              </div>
            ))}
        </div>

        <CarouselContols
          controls={options.contols}
          images={images}
          selectedImageIndex={selectedImageIndex}
          handleSelectedImageChange={handleSelectedImageChange}
        />
      </div>
    </div>
  );
};

export default ReactPlayerCarousel;
