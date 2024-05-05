import React, { useState, useEffect, useCallback } from 'react';
import FooterBar from './FooterBar'; 
import Sidebar from './Sidebar';
import './App.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; 

const App = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDogsIndex, setCurrentDogsIndex] = useState(0);
  const images = ["images/officer4.jpg","images/officer.jpeg", "images/womanOfficer.jpeg","images/dutyGuards.jpeg","images/officer2.jpeg","images/officer3.jpeg"];
  const dogs = ["images/dogs.jpeg", "images/dogs2.jpeg","images/dogs3.jpeg","images/dogs4.jpeg","images/dogs5.jpeg"];

  const goToPreviousSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);
  
  const goToPreviousDogs = useCallback(() => {
    setCurrentDogsIndex((prevIndex) => (prevIndex === 0 ? dogs.length - 1 : prevIndex - 1));
  }, [dogs.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);
  
  const goToNextDogs = useCallback(() => {
    setCurrentDogsIndex((prevIndex) => (prevIndex === dogs.length - 1 ? 0 : prevIndex + 1));
  }, [dogs.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);  
    const interval2 = setInterval(goToNextDogs, 2000); 
    return () => clearInterval(interval, interval2);
  }, [goToNextSlide, goToNextDogs]);


  return (
  <div className="flex flex-col min-h-screen">
    <div className="flex bg-gray-300">
      <div className="flex-1 bg-gray-900 pl-8 ">
        <div style={{backgroundColor: '#1a365d'}} className='flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2'>
          <p className="text-white text-3xl font-bold pt-2">OTTOMAN</p>
        </div>


        <Sidebar />
        <div className="flex justify-center items-center">
          <div className="w-full sm:w-full pl-3 mt-2 items-center">
            <div className="bg-gray-900 text-white">
              <div className="p-4">
                <div className='flex justify-center'>
                  <div className='ring ml-2 mr-10'></div>
                  <div className='ring ml-2 mr-10'></div>
                  <div className='ring ml-2 mr-10'></div>
                  <img  src="images/securityLogo.jpeg" alt="piloe" style={{width:'200px',height:'200px'}} className="rounded-full object-cover ml-2 mr-10" />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto pl-3 mt-2">
          <div className="bg-gray-800 text-white">
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">MISSION</h5>
              <p className="text-sm">Ottoman Security is committed to providing exceptional services by delivering personalized, high-quality and cost-efficient solutions to meet the need of our clients. We strive to exceed the requests of our clients by going above and beyond what is asked to ensure that every detail is to your requirements.</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto pl-3 mt-2 mb-8">
          <div className="bg-gray-800 text-white">
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">VISION</h5>
              <p className="text-sm">To be a leading professional security company in the provision of security services with integrity within the Kenya and beyond.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 flex">



        <div className="w-full sm:w-auto pl-3 mt-2">
  <div className="bg-gray-800 text-white">
    <div className="p-4">
      <span className="text mb-2">Quality service</span>
      <p className="text-gray-300 mb-4">We are committed to providing top-notch service to our clients.</p>
      <img src="images/officer4.jpg" alt="team" style={{ width: '230px', height: 'auto' }} className="border border-green-500 object-cover mb-4" />
    </div>
  </div>
</div>

          <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">Team Of Officers</h5>
                <p className="text-sm mb-4">Ottoman is committed to providing exceptional security services by delivering personalized, high quality and cost effective security solutions that meets the needs of our clients</p>
             <br></br>

                <img src="images/team.jpeg" alt="team" style={{width:'420px' ,height:'200px'}} className=" border border-green-500 object-cover mb-4" />
             <br></br>

             <br></br>

              </div>
            </div>
          </div>
          

          <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
                <div className='flex'>
                  
                <button onClick={goToPreviousSlide}  ><MdKeyboardArrowLeft size={29} /></button>
                  <img src={images[currentImageIndex]}  style={{width:'200px' ,height:'auto'}}  alt="officer" className="  border border-green-500   object-cover mb-4" />
                <button onClick={goToNextSlide} ><MdKeyboardArrowRight size={29} /></button>
 
 
                </div>
                <p className="text-sm mb-2 text-yellow-200">Slide {currentImageIndex + 1} of {images.length}</p>
   

                <h5 className="text-xl font-bold mb-2">Guard On Duty</h5>
                <p className="text-sm mb-4">Ottoman strives to provide carefully selected, trained, motivated, and committed Security Officials who report for duty on time, who are sober, alert, neat in appearance, proactive and capable of responding to instructions. Training and development, at all levels, are regarded as essential in the delivery of a quality service to customers, ensuring that personnel are competent and have the opportunity to advance in the company. Well-trained security personnel's instinct and judgment beat even the most advanced technology, making 'Manned Guarding' the most crucial aspect of any effective security deployment strategy. All security personnel are selected through a stringent selection process that includes detailed background checks. Further, our personnel undergo a rigorous 160-hour training program to meet industry and region-specific security norms. Owing to an innovative approach and a dedicated workforce, we have an industry-best client retention rate of 99.5%. Recruitment and training process; We follow a stringent selection process with background checks, fingerprinting and police verification so that only the very best secure your business.</p>
              </div>
            </div>
          </div>

        <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white ">
            <span className="text  p-4 mb-2">Ottoman Dogs</span>

              <div className="p-4 flex">
                <button onClick={goToPreviousDogs}  ><MdKeyboardArrowLeft size={29} /></button>
                <img src={dogs[currentDogsIndex]}  style={{width:'200px' ,height:'auto'}}  alt="dogs" className="  border border-green-500   object-cover mb-4" />
                <button onClick={goToNextDogs} ><MdKeyboardArrowRight size={29} /></button>


              </div>
              <p className="text-sm mb-2 text-yellow-200">Slide {currentDogsIndex + 1} of {dogs.length}</p>

            </div>
          </div>
          
        </div>
        
          <div className="w-fullb bg-gray-800 mt-4 mb-4 flex justify-center items-center">
            <div className=" bg-gray-800 text-white">
              <div className="p-4 justify-center items-center">
                <img src="images/ottomanPlaque.jpg" alt="team" style={{width:'420px', height:'auto'}} className="border border-green-500 object-cover mb-4" />
              </div>
            </div>
          </div>


        <hr className='border border-yellow-500'></hr>

      </div>
    </div>
    <FooterBar />
  </div>
  );
}

export default App;