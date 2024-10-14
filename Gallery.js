// src/components/Gallery.js
import React from 'react';

function Gallery() {
  const images = [
    'gal1.png', // Image 1
    'gal2.png', // Image 2
    'gal3.png', // Image 3
    'gal4.png', // Image 4
    'gal5.png', // Image 5
    'gal6.png', // Image 6
    'gal7.png', // Image 7
    'gal8.png', // Image 8
    'gal9.png', // Image 9
    'gal10.png', // Image 10
  ];

  return (
    <div style={styles.galleryContainer}>
      <h2>Photo Gallery</h2>
      <div style={styles.imageGrid}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // 5 columns
    gap: '10px', // Space between images
  },
  image: {
    width: '100%', // Make images responsive
    height: 'auto', // Maintain aspect ratio
  },
};

export default Gallery;



