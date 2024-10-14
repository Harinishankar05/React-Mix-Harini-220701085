// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div>
      {/* First Project */}
      <div style={styles.container}>
        <img
          src="proj1.png" // Replace with your first project image URL
          alt="Project Example 1"
          style={styles.image}
        />
        <div style={styles.content}>
          <h2>Sample Project 1</h2>
          <p>
The home is located at 123 Modern Ave, Design City, State, ZIP, in a vibrant neighborhood known for its community parks and family-friendly atmosphere. It is conveniently accessible via major highways and public transportation, making commuting easy for residents.
          </p>
        </div>
      </div>

      {/* Second Project */}
      <div style={styles.container}>
        <img
          src="proj2.png" // Replace with your second project image URL
          alt="Project Example 2"
          style={styles.image}
        />
        <div style={styles.content}>
          <h2>Sample Project 2</h2>
          <p>
The Modern Home Design project focuses on creating a stylish and functional living space that caters to contemporary lifestyles. This project showcases the architectural design and interior layout of a beautiful family home, emphasizing open spaces, natural light, and modern amenities. The design incorporates sustainable materials and energy-efficient solutions, ensuring a minimal environmental impact

          </p>
        </div>
      </div>
<div style={styles.container}>
        <img
          src="proj3.png" // Replace with your third project image URL
          alt="Project Example 3"
          style={styles.image}
        />
        <div style={styles.content}>
          <h2>Project 3: Urban Garden Initiative</h2>
          <p>
            The Urban Garden Initiative is a community-based project aimed at transforming vacant lots into vibrant green spaces. 
            This initiative promotes sustainable gardening practices and encourages community involvement. The project includes the installation of community gardens, 
            educational workshops, and a commitment to biodiversity and sustainability. 
            Located in downtown areas, these gardens provide fresh produce to the local community and serve as a hub for environmental education.
          </p>
        </div>
      </div>
    
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', // Use flexbox for layout
    alignItems: 'center', // Center items vertically
    padding: '20px',
    border: '1px solid #ccc', // Optional: Add a border for visual separation
    marginBottom: '20px', // Space between projects
  },
  image: {
    maxWidth: '300px', // Adjust the image size as needed
    marginRight: '20px', // Space between image and content
  },
  content: {
    flex: 1, // Allow content to take the remaining space
  },
};

export default Projects;



