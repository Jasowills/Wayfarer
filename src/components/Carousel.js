import React from 'react';
import AutoCarousel from './AutoCarousel';

const images = [
    'https://gigm.com/static/media/uselu.7cb20a56.webp',
    'https://gigm.com/static/media/edo.0b4b899c.webp',
  'https://gigm.com/static/media/abuja.66ce9d98.webp',
  'https://gigm.com/static/media/lagos-ajah.77b1a400.webp',
  'https://gigm.com/static/media/uselu.7cb20a56.webp',
 'https://gigm.com/static/media/edo.0b4b899c.webp',

];

const titles = [
  'Ajah to Eko',
  'Egbeda to Ikotun',
  'Surulere to Mushin',
  'Iyana-IpaJa to Ikorodu',
  'Epe to Ajah',
  'Lekki to Apapa',
];

const descriptions = [
  'Description for Image 1',
  'Description for Image 2',
  'Description for Image 4',
  'Description for Image 4',
  'Description for Image 5',
  'Description for Image 6',
];

const App = () => {
  return (
    <div>
      <AutoCarousel images={images} titles={titles} descriptions={descriptions} />
    </div>
  );
};

export default App;
