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
                            <p className="text-sm mb-2">"The Guards are disciplined"</p>
                            <p className="text-xs">- Mowlem Heights Adjustment- Rose Nekesa</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="mb-6">
                            <p className="text-sm mb-2">"Ottoman has been securing our clinics and so far their seamless services are exceptional. I would vouch for them any time"</p>
                            <p className="text-xs">- Nyawita Medical Clinic- Jared Otieno</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="mb-6">
                            <p className="text-sm mb-2">"They have secured our facilities at Milimani area. Their guards are proactive when exercising their security duties"</p>
                            <p className="text-xs">- Museum View Hotel- Mary</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm mb-2">"Ottoman exercises professionalism at its best"</p>
                            <p className="text-xs">-Adongo- Janet Adongo</p>
                        </div>
                        {/* Add more testimonials as needed */}
                    </div>
                </div>
            </div>
        <hr style={{ borderColor: '#FFD700' }}></hr>

            {/* Footer */}
            <FooterBar />
        </div>
    );
}

export default Testimonials;
