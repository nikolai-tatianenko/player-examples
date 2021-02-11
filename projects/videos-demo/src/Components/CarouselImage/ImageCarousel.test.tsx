import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageCarousel, { ImageType } from './ImageCarousel';

describe('ImageCarousel', () => {
  const images: ImageType[] = [
    { id: 1, url: 'image1.jpg' },
    { id: 2, url: 'image2.jpg' },
    { id: 3, url: 'image3.jpg' },
  ];

  it('renders without errors', () => {
    render(<ImageCarousel images={images} />);
  });

  it('displays the first image as selected by default', () => {
    const { getByTestId } = render(<ImageCarousel images={images} />);
    const selectedImage = getByTestId('selected-image');
    expect(selectedImage.style.backgroundImage).toBe(`url(${images[0].url})`);
  });

  it('changes the selected image on left click', () => {
    const { getByText, getByTestId } = render(
      <ImageCarousel images={images} />
    );
    const selectedImage = getByTestId('selected-image');
    const leftButton = getByText('Prev');

    fireEvent.click(leftButton);

    expect(selectedImage.style.backgroundImage).toBe(`url(${images[2].url})`);
  });

  it('changes the selected image on right click', () => {
    const { getByText, getByTestId } = render(
      <ImageCarousel images={images} />
    );
    const selectedImage = getByTestId('selected-image');
    const rightButton = getByText('Next');

    fireEvent.click(rightButton);

    expect(selectedImage.style.backgroundImage).toBe(`url(${images[1].url})`);
  });

  it('scrolls to the selected image element', () => {
    const { getByText } = render(<ImageCarousel images={images} />);
    const carouselImage = getByText('image3.jpg');

    fireEvent.click(carouselImage);

    expect(carouselImage.scrollIntoView).toHaveBeenCalled();
  });
});
