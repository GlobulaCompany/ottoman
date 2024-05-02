import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const Faqs = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Top bar */}
            <div style={{backgroundColor: '#1a365d'}} className="  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2">
                <p className="text-white text-3xl font-bold pt-2">FAQs</p>
            </div>
            {/* Sidebar */}
            <Sidebar />
            {/* Main content */}
            <div className="flex justify-center items-center mt-8 flex-grow px-4">
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white p-4">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        {/* FAQ 1 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Q: What types of security services does Ottoman Security Group offer?</h3>
                            <p className="text-sm">A: Ottoman Security Group provides a wide range of security services, including manned guarding, security system design and installation, private investigations, asset and vehicle tracking, and more.</p>
                        </div>
                        {/* FAQ 2 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Q: How does Ottoman Security Group ensure the quality of its security personnel?</h3>
                            <p className="text-sm">A: Ottoman Security Group follows a stringent selection process and provides rigorous training to its security personnel. Additionally, the company regularly evaluates and monitors its personnel to maintain high standards of quality.</p>
                        </div>
                        {/* FAQ 3 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Q: Can Ottoman Security Group handle security for both residential and commercial properties?</h3>
                            <p className="text-sm">A: Yes, Ottoman Security Group offers security services for both residential and commercial properties. Whether you need security for your home, office, or event, Ottoman Security Group has tailored solutions to meet your needs.</p>
                        </div>
                        {/* Add more FAQs as needed */}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <FooterBar />
        </div>
    );
}

export default Faqs;
