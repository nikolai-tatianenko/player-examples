import React from "react";

/**
 * Component for the carousel controls.
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.controls - Indicates whether the controls should be displayed.
 * @param {ImageType[]} props.images - The array of images for the carousel.
 * @param {number} props.selectedImageIndex - The index of the currently selected image.
 * @param {Function} props.handleSelectedImageChange - The callback function for handling image selection changes.
 * @returns {JSX.Element|null} The rendered component.
 */
export const CarouselControls = ({
  controls,
  images,
  selectedImageIndex,
  handleSelectedImageChange,
}) => {
  const handleRightClick = () => {
    const newIdx = (selectedImageIndex + 1) % (images?.length || 1);
    handleSelectedImageChange(newIdx);
  };

  const handleLeftClick = () => {
    const newIdx =
      (selectedImageIndex - 1 + (images?.length || 1)) % (images?.length || 1);
    handleSelectedImageChange(newIdx);
  };

  if (!controls) {
    return null;
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

export default CarouselControls;
