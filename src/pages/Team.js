import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const Team = () => {    
    return (
        <div className='flex flex-col min-h-screen bg-gray-900'> 
            <div style={{backgroundColor: '#1a365d'}} className='  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2'>
                <p className="text-white text-3xl font-bold pt-2">Team</p>
            </div>
            <Sidebar />
            <div className="flex justify-center items-center mt-8 flex-grow px-4"> 
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white">
                        <div className="p-4">
                            <div className="mb-8">
                                <img src="images/team.jpeg" alt="Team" className="w-full h-auto border border-green-500 object-cover mb-4" />
                                <h2 className="text-xl font-bold mb-2">Meet Our Team</h2>
                                <p className="text-sm mb-4">
                                    At Ottoman Security, our team is comprised of highly trained and dedicated security professionals. Each member of our team is committed to ensuring the safety and security of our clients.
                                </p>
                                <p className="text-sm mb-4">
                                    Our team includes security guards, supervisors, trainers, and administrative staff who work together to deliver exceptional security services tailored to meet the specific needs of our clients.
                                </p>
                                <div className="flex mb-4">
                                    <img src="images/officer.jpeg" alt="Male Officer" className="w-24 h-27 border border-green-500 mr-2 object-cover mb-4"  />
                                    <img src="images/womanOfficer.jpeg" alt="Female Officer" className="w-24 h-26 border border-green-500 object-cover mb-4"  />
                                </div>
                                <p className="text-sm mb-4">
                                    We believe in continuous training and professional development to ensure that our team members are equipped with the latest skills and knowledge to effectively address evolving security challenges.
                                </p>
                                {/* Add more details about specific team members or teams if needed */}
                            </div> 
                            {/* Add more sections for different teams or team members */}
                        </div>
                    </div>
                </div>
            </div> 
            <FooterBar />
        </div>
    );
}

export default Team;
