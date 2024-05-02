import React, { useState, useEffect } from 'react';
import FooterBar from './FooterBar'; 
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["images/officer.jpeg", "images/womanOfficer.jpeg"];

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex bg-gray-300">
        <div className="flex-1 bg-gray-900 pl-8">
          {/* Your other content */}

          <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
                <div className='flex justify-center'>
                  <button onClick={goToPreviousSlide} className="mr-2">&lt;</button>
                  <img src={images[currentImageIndex]} alt="officer" className="w-24 h-27 border border-green-500 mr-2 object-cover mb-4" />
                  <button onClick={goToNextSlide} className="ml-2">&gt;</button>
                </div>
                <p className="text-sm text-center mt-2">Picture {currentImageIndex + 1} of {images.length}</p>
              </div>
            </div>
          </div>

          {/* Your other content */}
        </div>
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
