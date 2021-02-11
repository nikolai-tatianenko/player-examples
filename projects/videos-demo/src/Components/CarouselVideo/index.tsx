import { useEffect, useState } from 'react';
import ImageCarousel, { ImageType } from './VideoCarousel';
import CarouselControls from './CarouselControls';
import './styles.css';

export default function ImageVideo() {
  const [useThumbnails, setUseThumbnails] = useState(true);
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages([
      {
        id: 1,
        url: 'https://vimeo.com/347119375',
        title: 'video1',
      },
      { id: 2, url: 'https://vimeo.com/347119375', title: 'video2' },
      { id: 3, url: 'https://vimeo.com/347119375', title: 'video3' },
      { id: 4, url: 'https://vimeo.com/347119375', title: 'video4' },
      { id: 5, url: 'https://vimeo.com/347119375', title: 'video5' },
    ]);
  }, []);
  const options: any = { thumbnail: useThumbnails, controls: true };

  return (
    <div className="App">
      <h2>Thumbnails could be removed or added.</h2>
      <fieldset>
        <caption>Options</caption>
        <button onClick={() => setUseThumbnails(!useThumbnails)}>
          Show/hide thumbnail
        </button>
      </fieldset>
      <ImageCarousel images={images} options={options} />
    </div>
  );
}
