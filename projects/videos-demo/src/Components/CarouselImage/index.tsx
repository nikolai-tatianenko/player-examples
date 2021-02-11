import { useEffect, useState } from 'react';
import ImageCarousel, { ImageType } from './ImageCarousel';
import './styles.css';

/**
 * Main application component.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function ImageVideo() {
  /**
   * Generates an array of image objects.
   * @returns {ImageType[]} The array of image objects.
   */
  const generateImages = () => {
    return Array.from(Array(10).keys()).map((id) => ({
      id,
      url: `https://picsum.photos/1000?random=${id}`,
    }));
  };

  const [images, setImages] = useState<ImageType[]>(generateImages());

  useEffect(() => {
    setImages(generateImages());
  }, []);

  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}
