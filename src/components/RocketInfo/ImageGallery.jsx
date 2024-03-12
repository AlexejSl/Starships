import { useEffect, useState } from 'react';
import { Card, CardMedia, Button } from '@mui/material';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './RocketInfo.module.scss';

function ImageGallery({ images, currentStarship }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentStarship]);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="400"
        image={images[currentImageIndex]}
        alt="Image"
      />
      <div>
        <Button
          variant="text"
          onClick={handlePrevClick}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '4%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MdOutlineKeyboardArrowLeft className={styles.imgButton} />;
        </Button>
        <Button
          variant="text"
          onClick={handleNextClick}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '96%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MdOutlineKeyboardArrowRight className={styles.imgButton} />;
        </Button>
      </div>
    </Card>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  currentStarship: PropTypes.number,
};

export default ImageGallery;
