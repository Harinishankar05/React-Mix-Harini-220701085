// src/components/Main.js
import React from 'react';

function Main() {
  return (
<div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Project Lorem</h1>
      </div>
      <div style={styles.imageContainer}>
        <img 
          src="main.png" // Replace with your image URL
          alt="Main Project"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', // Use flexbox for layout
    alignItems: 'center', // Center items vertically
    padding: '20px',
  },
  textContainer: {
    flex: 1, // Allow text to take the remaining space
    paddingRight: '20px', // Space between text and image
  },
  heading: {
    fontSize: '48px', // Adjust the font size as needed
    margin: 0, // Remove default margin
  },
  imageContainer: {
    flex: 1, // Allow image to take the remaining space
  },
  image: {
    width: '100%', // Make image responsive
    height: 'auto', // Maintain aspect ratio
  },
};



export default Main;

