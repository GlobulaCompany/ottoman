import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const SecurityAuditReport = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-900'>
        <div style={{ backgroundColor: '#1a365d' }} className='  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2'>
            <p className="text-white p-4 "> POST DEPLOYMENT SECURITY AUDIT REPORT.</p>
        </div>
        <Sidebar />
        <div className="flex justify-center items-center mt-8 flex-grow px-4">
            <div className="w-full sm:w-3/4 pl-8 mt-2">
                <div className="bg-gray-800 text-white">
                    <div className="p-4">


            <h2 className="text-2xl font-bold mb-2">AEE POWER LTD YARD</h2>
            <p>Ottoman is committed to providing exceptional security services by delivering personalized, high-quality, and cost-efficient solutions to meet the needs of our clients.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">INTRODUCTION</h3>
           <p>OTTOMAN security entered into a security contract to offer guarding services on your yard premises in the car wash estate. The services primarily include safety, surveillance, and protection of properties at the site against theft and pilferage.</p>
            <p>We successfully deployed guards on 14th March 2024 at the Yard after conducting a preliminary site visit and signing the contract to offer 24-hours guarding of the yard. The company deployed two security officers to secure the premise during the day and two security officers to secure the premise at night.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">SECURITY STRENGTHS IDENTIFIED</h3>
                <ol className="list-disc pl-6 mb-4" >
                    <li>
                        <strong>PERIMETER WALL FENCE:</strong> The yard has a perimeter wall fence all-round the compound making it easy to control the movement in and out the yard. All the entry by unknown persons must be documented and interrogated by the security officers on duty. It makes it difficult for the properties protected to disappear via the fence.
                    </li>
                    <li>
                        <strong>LIGHTING:</strong> The compound has an independent lighting system free from interruption by third parties. The lighting is also not connected from a third party making the system free from sabotage.
                    </li>
                    <li>
                        <strong>GATE:</strong> Its availability makes it easy to control entry and exit of pedestrians and vehicles into the yard. It also makes it easy to document.
                    </li>
                </ol>

 
                <h3 class="text-xl font-bold mt-8 mb-4">SECURITY WEAKNESSES/LAPSES IDENTIFIED</h3>
                              <p>
                                <strong>ALARM SYSTEM:</strong>The yard lack an intruder alarm system that can easily be put on to scare perpetrators incase there is an attack. The site also lack alarm system backed up to control room of security firm to offer back up response at the times of an attack

                                </p>
                                <p>
                                <strong>CCTV:</strong> The yard has no cctv surveillance system installed, this creates a serious security lapse. Absence of CCtv makes it difficult to identify criminals once an incident happens.

                                </p>    

                              <p>
                           <img src="images/house2.jpeg" style={{ width: '200px', height: 'auto',float:'left' }} alt="Male Officer" className="border border-green-500 object-cover m-4" />

                                <strong>BUSHY SURROUNDING: </strong> The yard is very bushy with long trees grown in different corners of the compound, this hinders clear vision of the full compound at all times. The long trees and weeds in between the properties being protected can act as a hiding den to criminals targeting the yard.
                                </p>
                                <p>
                           <img src="images/house1.jpeg" style={{ width: '200px', height: 'auto',float:'left' }} alt="Male Officer" className="border border-green-500 object-cover m-4" />

                                <strong>TALL BUILDINGS AROUND THE YARD:</strong> The surrounding of the yard has tall buildings which are occupied by people of different caliber. They are capable of having 24hours watch over the yard. Tall buildings can easily act as planning and surveillance point to attack the yard as can be seen 
                                </p>
                                
                           
                               <p> <strong>PREVIOUS YARD ATTACKS:</strong>The yard has previous history theft which is well known in the neighborhood.</p>
                               <p>  <strong>KNOWN VALUE OF PROPERTIES ON SITE:</strong> The community around are aware of the properties being protected at the site.</p>


                        <h3 className="text-xl font-bold mt-8 m-4" style={{clear:'both'}}>INCIDENTS ENCOUNTERED SINCE DEPLOYMENT</h3>
                        <ol className="list-disc pl-6 mb-4">
                            <li>15th March 2024 – Two different groups tried to gain access into the compound at around 2am and 3am claiming to be looking for “Maasais”. They were repelled by the security officers on duty.</li>
                            <li>16th March 2024 – A group of around three were heard chatting in low tones outside the gate at around 1:00 am. One tried to jump into the compound but was repelled by the security officers on duty.</li>
                            <li>17th March 2024 – Two middle-aged men well-dressed approached the compound at around 18:30 hours with what looked like a survey motive. They were seen looking into the yard over the closed gate. When asked what they were up to, they claimed that they are looking for the “Maasais” who are their friends. They were dispersed by the security officers on duty.</li>
                        </ol>
                        <h3 class="text-xl font-bold mt-8 mb-4">PRELIMINARY INQUEST ON PREVIOUS ATTACKS</h3>
                            <ol class="list-decimal pl-6 mb-4">
                                <li>Upon gathering intelligence around the yard on previous attacks, it emerged that it is normally a well planned and executed theft by criminals who have keenly studied the movement of previous security officers.</li>
                                <li>The criminals clearly know what properties that are on site and their value in market rates.</li>
                                <li>It also emerged that they are so daring that resistance can be so fatal to the guards.</li>
                                <li>It also emerged that the theft seemed to be an inside job. The criminals must have liaised with the previous security officers after compromising them.</li>
                                <li>IT ALSO EMERGED THAT THEY ARE STILL PLANNING MORE ATTACKS INTO THE YARD.</li>
                            </ol>



            <h3 className="text-xl font-bold mt-8 mb-4">RECOMMENDATIONS</h3>
            <p>As the contracted security firm offering prevention, protection, and surveillance of the property’s at yard, we highly recommend the use of trained guarding dogs at night.</p>

            <br></br>
        <div className="justify-center text-center">
            <p style={{fontStyle:'italic'}}>Report prepared By George Odhiambo, BA Criminology, MMUST.</p>
            <p style={{fontStyle:'italic'}} >Report received by John Nyauncho, BA Criminology, Egerton University.</p>
        </div>

        </div>
                    </div>
                </div>
            </div>
            <hr className='border border-yellow-500'></hr>

            <FooterBar />
        </div>
    );
}

export default SecurityAuditReport;
