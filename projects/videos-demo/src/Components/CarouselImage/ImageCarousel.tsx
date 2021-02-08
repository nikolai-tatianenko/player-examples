import React, { useEffect, useRef, useState } from "react";

export type ImageType = { id: number; url: string };

/**
 * Image carousel component.
 * @component
 * @param {Object} props - The component props.
 * @param {ImageType[]} props.images - The array of images for the carousel.
 * @returns {JSX.Element} The rendered component.
 */
const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const carouselItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (images?.[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    setSelectedImage(images?.[newIdx]);
    setSelectedImageIndex(newIdx);
    const selectedElement = carouselItemsRef.current[newIdx];
    selectedElement?.scrollIntoView({ inline: "center", behavior: "smooth" });
  };

  const handleRightClick = () => {
    const newIdx = (selectedImageIndex + 1) % (images?.length || 1);
    handleSelectedImageChange(newIdx);
  };

  const handleLeftClick = () => {
    const newIdx = (selectedImageIndex - 1 + (images?.length || 1)) % (images?.length || 1);
    handleSelectedImageChange(newIdx);
  };

  return (
    <div className="carousel-container">
      <h2 className="header">Image Carousel</h2>
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className="carousel">
        <div className="carousel__images">
          {images?.map((image, idx) => (
            <div
              onClick={() => handleSelectedImageChange(idx)}
              style={{ backgroundImage: `url(${image.url})` }}
              key={image.id}
              className={`carousel__image ${
                selectedImageIndex === idx && "carousel__image-selected"
              }`}
              ref={(el) => (carouselItemsRef.current[idx] = el)}
            />
          ))}
        </div>
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          Prev
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
