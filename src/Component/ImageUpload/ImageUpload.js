import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

   // Make sure the URL matches your server endpoint
axios.post('http://localhost:8080/imageUpload', formData).then((response) => {
    console.log(response.data.message);
  });
  
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
