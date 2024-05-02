import React from 'react';
import Sidebar from '../Sidebar'; 
import FooterBar from '../FooterBar'; 

const Home = () => (
  <div className="flex flex-col  min-h-screen">
    <div className="flex bg-gray-300">
      <Sidebar />
      <div className="flex-1 bg-gray-900 pl-8">
      <div  style={{backgroundColor: '#1a365d'}} className='  flex justify-center  fixed top-0 w-full left-1/2 transform -translate-x-1/2'>
  <p className="text-white text-3xl font-bold pt-2  ">OTTOMAN</p>
</div>

        <div className="flex justify-center items-center">
  <div className="w-full sm:w-full pl-3 mt-2 items-center">
    <div className="bg-gray-800 text-white">
      <div className="p-4">
        <div className='flex justify-center'>
          <img src="images/securityLogo.jpeg" alt="piloe" style={{width:'200px',height:'200px'}} className="rounded-full object-cover mb-4 mr-10" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
              <h5 className="text-xl font-bold mb-2">MISSION</h5>
                <p className="text-sm ">Ottoman Security is committed to providing exceptional services by delivering personalized, high -
quality and cost-efficient solutions to meet the need of our clients. We strive to exceed the requests
of our clients by going above and beyond what is asked to ensure that every detail is to your
requirements. </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-auto pl-3 mt-2 mb-8">
            <div className="bg-gray-800 text-white">
              <div className="p-4 ">
              <h5 className="text-xl font-bold mb-2">VISSION</h5>
                <p className="text-sm ">To be a leading professional security company in the provision of security services with
integrity within the Western Kenya and beyond.</p>

              </div>
            </div>
          </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">


          <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
              <img src="images/team.jpeg" alt="team" className="w-200 h-32 border border-green-500  object-cover mb-4"  />

                <h5 className="text-xl font-bold mb-2">Team Of Officers</h5>
                                <p className="text-sm mb-4">Ottoman strives to provide carefully selected, trained, motivated, and committed Security Officials 
                who report for duty on time, who are sober,
                alert, neat in appearance, proactive and capable of 
                responding to instructions. Training and development, at all levels, are regarded as essential in the 
                delivery of a quality service to customers, ensuring that personnel are competent and have the 
                opportunity to advance in the company.</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto pl-3 mt-2">
            <div className="bg-gray-800 text-white">
              <div className="p-4">
                <div className='flex'>
              <img src="images/officer.jpeg" alt="offier" className="w-24 h-27 border border-green-500 mr-2 object-cover mb-4"  />
              <img src="images/womanOfficer.jpeg" alt="officer wowman" className="w-24 h-26 border border-green-500 object-cover mb-4"  />

              </div>
                <h5 className="text-xl font-bold mb-2">Guard On Duty</h5>
                                            <p className="text-sm mb-4">Ottoman strives to provide carefully selected, trained, motivated, and committed Security Officials 
                            who report for duty on time, who are sober, alert, neat in appearance, proactive and capable of 
                            responding to instructions. Training and development, at all levels, are regarded as essential in the 
                            delivery of a quality service to customers, ensuring that personnel are competent and have the 
                            opportunity to advance in the company.
                            [18:30, 29/04/2024] .: Well-trained security personnel's instinct and 
                            judgment beat even the most advanced 
                            technology, making 'Manned Guarding' the most 
                            crucial aspect of any effective security deployment 
                            strategy. All security personnel are selected 
                            through a stringent selection process that includes 
                            detailed background checks. Further, our 
                            personnel undergo a rigorous 160-hour training 
                            program to meet industry and region-specific 
                            security norms. Owing to an innovative approach 
                            and a dedicated workforce, we have an industry 
                            best client retention rate of 99.5% 
                            Recruitment and training process;
                            We follow a stringent selection process with 
                            background checks, fingerprinting and police 
                            verification so that only the very best secure your 
                            business.</p>
              </div>
            </div>
          </div>


        </div>

        <hr style={{ borderColor: '#FFD700' }}></hr>


      </div>
      

    </div>




    <FooterBar />


  </div>
);

export default Home;
