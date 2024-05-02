import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar'; 

const SecurityMeasures = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Top bar */}
            <div style={{backgroundColor: '#1a365d'}} className="  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2">
                <p className="text-white text-3xl   pt-2">Measures</p>
            </div>
            {/* Sidebar */}
            <Sidebar />
            {/* Main content */}
            <div className="flex justify-center items-center mt-8 flex-grow px-4">
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white p-4">
                        <h2 className="text-2xl font-bold mb-4">Our Top-Notch Security Measures</h2>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">CCTV Surveillance</h3>
                            <p className="text-sm">We utilize state-of-the-art CCTV surveillance systems to monitor and protect your premises 24/7.</p>
                            <img src="images/cctv.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Trained Security Dogs</h3>
                            <p className="text-sm">Our highly trained security dogs provide an added layer of protection, detecting intruders and illegal substances with precision.</p>
                            <img src="images/dogs.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Alarm Systems</h3>
                            <p className="text-sm">We install advanced alarm systems that instantly alert our response teams in case of any security breach or emergency.</p>
                            <img src="images/alarm.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Fire Extinguishers</h3>
                            <p className="text-sm">We equip your premises with high-quality fire extinguishers and provide training on their proper use to ensure quick response and fire safety.</p>
                            <img src="images/fireExtinguisher.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Electric Fencing</h3>
                            <p className="text-sm">Our electric fencing systems serve as a formidable barrier, deterring intruders and enhancing the security of your property.</p>
                            <img src="images/securityWire.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <FooterBar />
        </div>
    );
}

export default SecurityMeasures;
