import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const Blog = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Top bar */}
            <div style={{backgroundColor: '#1a365d'}} className="  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2">
                <p className="text-white text-3xl font-bold pt-2">Blog Posts</p>
            </div>
            {/* Sidebar */}
            <Sidebar />
            {/* Main content */}
            <div className="flex justify-center items-center mt-8 flex-grow px-4">
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white p-4">
                        {/* Blog Post 1 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Improving Security: Tips for Safeguarding Your Business Premises</h3>
                            <p className="text-sm mb-2">Published on: <span className="text-gray-400">April 29, 2024</span></p>
                            <p className="text-sm">In our latest blog post, we discuss effective strategies for enhancing security at your business premises. From access control to surveillance systems, learn how to protect your assets and ensure peace of mind for your employees and customers.</p>
                        </div>
                        {/* Blog Post 2 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">The Importance of Professional Security Guards</h3>
                            <p className="text-sm mb-2">Published on: <span className="text-gray-400">April 25, 2024</span></p>
                            <p className="text-sm">Discover why professional security guards are essential for safeguarding your business. From deterrence to rapid response, learn how trained personnel can mitigate risks and protect your property from threats.</p>
                        </div>
                        {/* Blog Post 3 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-2">Maximizing Security with Technology: The Role of CCTV Systems</h3>
                            <p className="text-sm mb-2">Published on: <span className="text-gray-400">April 20, 2024</span></p>
                            <p className="text-sm">Explore the benefits of CCTV systems in enhancing security measures. From monitoring to evidence collection, understand how modern technology can bolster your security infrastructure and deter criminal activities.</p>
                        </div>
                        {/* Add more blog posts as needed */}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <FooterBar />
        </div>
    );
}

export default Blog;
