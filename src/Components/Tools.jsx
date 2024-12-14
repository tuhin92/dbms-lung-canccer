import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const Tools = () => {
  const [image, setImage] = useState(null);  // State to hold the uploaded image
  const [prediction, setPrediction] = useState(null); // State to hold prediction result
  const [loading, setLoading] = useState(false); // State to manage loading state

  // Load the MobileNet model
  const loadModel = async () => {
    setLoading(true);
    const model = await mobilenet.load();
    setLoading(false);
    return model;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));  // Set the uploaded image
    }
  };

  const handleImagePrediction = async () => {
    if (image) {
      setLoading(true);
      const model = await loadModel(); // Load the model
      const imgElement = document.getElementById('uploadedImage'); // Get the image element
      const predictions = await model.classify(imgElement); // Classify the image
      setPrediction(predictions); // Set prediction result
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Lung Image and Get Prediction</h2>

      {/* Image Upload Section */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      {/* Image Display */}
      {image && <img id="uploadedImage" src={image} alt="Uploaded" width="300" />}
      
      {/* Button to Trigger Prediction */}
      <button onClick={handleImagePrediction} className="btn btn-primary">
        {loading ? 'Processing...' : 'Get Prediction'}
      </button>

      {/* Display Prediction Results */}
      {prediction && (
        <div className="prediction-results">
          <h3>Prediction Results:</h3>
          {prediction.map((result, index) => (
            <p key={index}>
              <strong>{result.className}:</strong> {Math.round(result.probability * 100)}%
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
