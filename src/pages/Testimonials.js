import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const Testimonials = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Top bar */}
            <div style={{backgroundColor: '#1a365d'}} className="  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2">
                <p className="text-white text-3xl font-bold pt-2">Testimonials</p>
            </div>
            {/* Sidebar */}
            <Sidebar />
            {/* Main content */}
            <div className="flex justify-center items-center mt-8 flex-grow px-4">
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white p-4">
                        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
                        {/* Testimonial 1 */}
                        <div className="mb-6">
                            <p className="text-sm mb-2">"Outstanding security guard services. Vigilant, professional, and courteous guards. Highly recommend!"</p>
                            <p className="text-xs">- John Doe, CEO</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="mb-6">
                            <p className="text-sm mb-2">"Professional and reliable security guards. Felt safe knowing they were on duty."</p>
                            <p className="text-xs">- Jane Smith, Marketing Manager</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="mb-6">
                            <p className="text-sm mb-2">"Top-notch security services. Proactive approach and attention to detail."</p>
                            <p className="text-xs">- Michael Johnson, IT Director</p>
                        </div>
                        {/* Add more testimonials as needed */}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <FooterBar />
        </div>
    );
}

export default Testimonials;
