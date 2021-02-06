import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export type ImageType = {
  id: number;
  url: string;
  title: string;
};

const CarouselContols: React.FC = ({
  controls,
  images,
  selectedImageIndex,
  handleSelectedImageChange,
}) => {
  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  if (!controls) {
    //return null;
  }
  return (
    <>
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
    </>
  );
};

const ReactPlayerCarousel: React.FC<{ images?: ImageType[]; options: any }> = ({
  images,
  options,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const [playing, setPlay] = useState(false);
  //const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (images && images[0]) {
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      setPlay(true);
    }
  };

  return (
    <div className="carousel-container">
      <h1 className="header"> Carousel</h1>
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <ReactPlayer
        className="react-player"
        playing={playing}
        controls
        onEnded={() => {
          console.log("end");
          handleRightClick();
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
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
              >
                <h2 className="thumbnail-title">{image.title}</h2>
                {options.thumbnail && (
                  <ReactPlayer
                    url={image.url}
                    light={true}
                    width={"150px"}
                    height={"150px"}
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
