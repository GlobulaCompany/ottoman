import React from 'react';
import Sidebar from '../Sidebar';
import FooterBar from '../FooterBar';

const About = () => {       
    return (
        <div className='flex flex-col min-h-screen bg-gray-900'> 
            <div style={{backgroundColor: '#1a365d'}} className='  flex justify-center fixed top-0 w-full left-1/2 transform -translate-x-1/2'>
                <p className="text-white text-3xl font-bold pt-2">About Us</p>
            </div>
            <Sidebar />
            <div className="flex justify-center items-center mt-8 flex-grow px-4"> 
                <div className="w-full sm:w-3/4 pl-8 mt-2">
                    <div className="bg-gray-800 text-white p-4">

                        <h2 className="text-2xl font-bold mb-4">OTTOMAN</h2>
                        <p className="text-sm mb-6">Ottoman Security is a Kenyan-based dynamic security Company dedicated to the provision of
                           excellent security services. We deal with all your security needs and offer a complete range, planning,
                          system analysis and design as well as executive services.
                                
                        </p>
                        <p>Services:</p>

                        <ul className="list-disc pl-6 mb-4">
                            <li>Alarms</li>
                            <li>CCTV</li>
                            <li>Access Systems  </li>
                            <li>Electric Fencing  </li>
                            <li>Locking Systems  </li>
                            <li>Car Tracking  </li>
                          </ul>
 

                        <h2 className="text-2xl font-bold mb-4">SUPERVISION OF GUARDS</h2>
                        <p className="text-sm mb-6">
                        We have well trained and dedicated supervisors who visit guards at the assignment and check that
                         guards are well turned out, understand what they are supposed to do, they are alert while on duty and
                         that they follow the assignment instructions. 

                         </p>

                         
                      <h2 className="text-2xl font-bold mb-4">STAFF WELFARE</h2>
                        <p className="text-sm mb-6">
                        The security industry is labor intensive, hence the need to focus on provision of enabling environment
                        for service delivery. We look after the welfare of our guards, which motivates them to offer superior
                        service and reduces the urge to collude, steal or be involved in improprieties. Here under are some of
                        the highlights:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li> They are paid on time and in accordance with the law</li>
                            <li>They are paid bonuses and commended for exemplary performance</li>
                            <li>They are promoted strictly on merit</li>
                            <li>All our employees are provided health insurance</li>
                          </ul>
 


                        <h2 className="text-2xl font-bold mb-4">SECURITY SYSTEMS-DESIGN AND INSTALLATION</h2>
                        <p className="text-sm mb-6">
                        Our services are offered after a skillful survey, appraisals and risk assessments of your premises
                        topography then draw a fool proof security design that ensures no shadow areas. We offer :
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Design and installation</li>
                            <li>Audit of existing security systems</li>
                            <li>Both on site and remote, real-time surveillance(along with specialist operators)</li>
                            <li>Training in Security and Fire safety systems</li>
                            <li>Service and Maintenance of installed equipment</li>
                          </ul>
    
                        <h2 className="text-2xl font-bold mb-4">BRAND PROTECTION SERVICES</h2>
                        <p className="text-sm mb-6">
                        Ottoman has team of experts who are capable of detecting counterfeits, piracy, infringers and
                        plagiarisms activities. Product impersonation is an illegal activity in Kenya defined under Anti
                        counterfeit Act of 2008.
                        Brand impersonation and social media fraud are very common in the current society more so on
                        online business activities. This happens when you order product A and on delivery its product B which
                        closely resembles product A but it’s not what you wanted.
                                                    
                                                    
                        </p>
                        <h2 className="text-2xl font-bold mb-4">REAL ESTATE AGENCY</h2>
                        <p className="text-sm mb-6">
                        OTTOMAN offers real estate works ranging from land buying and selling, residential apartment
                        buying and selling, and leases of all forms of properties. We offer varied solution to landlord/landladies who own investment properties. We ease them the hustle of:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Collecting rent</li>
                            <li>Making mortgage payments</li>
                            <li>Completing property inspections</li>
                            <li>Coordinating security</li>
                            <li>Coordinating cleaning services</li>
                            <li>Communicating with tenants on the land</li>
                          </ul>
    

 
                        <h2 className="text-2xl font-bold mb-4">DEBT COLLECTION SERVICES</h2>
                        <p className="text-sm mb-6">
                        OTTOMAN SECURITY, has a team of experts who specialize in financial risk management, risk
                        evaluation and debt collection. The experts are well trained customer care, negotiating skills and legal
                        framework governing the debt collection and recoveries
                        </p> 


                        <h2 className="text-2xl font-bold mb-4">OTTOMAN SGS DIRECTORS & KEY PERSONNEL</h2>
                        <h6 style={{color:' #FFD700'}}>GEORGE ONYANGO ODHIAMBO</h6>
                        <p className="text-sm mb-6">
                                  Mr. Odhiambo is the Managing Director of Ottoman. He is an accomplished criminologist with
                                close to 10 years progressive experience in Security and Forensic Investigations. He is experienced in
                                developing security management plans, security training materials, forensic investigation, collecting
                                intelligence information, conducting fraud investigation, and writing security reports. George holds a
                                bachelor’s degree in Criminology specializing in security and forensic investigations from Masinde
                                Muliro University of Science & Technology. He has worked as an Investigations Officer with Bedrock
                                Security Ltd where he successfully supervised installation of biometric access and security monitoring
                                systems. Previously worked as Investigation Officer with Equity Bank in the Security and Forensics
                                Department. Mr. Odhiambo is also working as a part time lecturer at MMUST in the department of
                                Criminology and Social Work
                        </p> 

                        <h6 style={{color:' #FFD700'}}>JOHN NYAUCHO ONDIEKI</h6>
                        <p className="text-sm mb-6">
                        Mr. Nyauncho has sound knowledge and experience in the implementation and monitoring of
                        compliance processes as well as security audits and investigations. He holds a bachelor’s Degree in
                        Criminology specializing in security and forensic investigations from Egerton University. He has more
                        than 10 years progressive experience in Commercial Security. Previously, he worked with KK Security
                        as a Security Guard, Operations Assistant at Relay Falcon and later as a Security Controller with
                        Bedrock Holding Limited rising through the ranks to Quality Assurance Manager and Branch
                        Manager. He has experience with Kenya’s Criminal Justice System as he was attached at the
                        Directorate of Criminal Investigations (DCI) and worked with Kenya Correctional Services. Nyaucho
                        currently serves as Director of Security audits and compliance with Ottoman Security Services
                        Ltd
                        </p> 

                        <h6 style={{color:' #FFD700'}}>NELSON NYUNJA</h6>
                        <p className="text-sm mb-6">
                        Nyunja holds a degree in Economics from Egerton University. He has extensive experience in
                        programme management including strategic planning, Management Information Systems and
                        Financial Management. Currently, Nyunja serves as the Director Finance and Administration at
                        Ottoman Security Services Limited. 
                        </p> 
                        <h6 style={{color:' #FFD700'}}>BENARD OUMA</h6>
                        <p className="text-sm mb-6">
                        Ben has more than 10 years of progressive experience in M&E systems development and
                        implementation, programs evaluation, research, complex data analysis, and reporting. Ben is
                        accomplished in management and strategic planning. He boasts international experience having
                        worked as a Program Analyst and Evaluator with the Centre for Disease Control and Prevention
                        (CDC) in Atlanta, GA USA. Ben Holds a Master of Arts degree in Monitoring & Evaluation from
                        Maseno University, Bachelor of Science degree in Economics and Statistics from Egerton University.
                        He is further trained in program Evaluation theories and techniques at Claremont University in
                        California, USA, and data governance and measurement of multidimensional poverty by United
                        Nations and the Oxford University, United Kingdom. He currently serves as the Director Marketing
                        and Business Strategy at Ottoman where he is tasked with driving and guiding the companies’
                        vision, mission, and strategies. 
                        </p> 
                        <h6 style={{color:' #FFD700'}}>BELINDA NANTAMBI AUGO</h6>
                        <p className="text-sm mb-6">
                        BELINDA is the Director in charge of Human Resource Management. She has vast experience in
                        accounting, logistics and human Management, having previously worked with Platinum Credits and
                        Asha microfinance both in Kisumu.
                        She holds a Bachelor’s Degree in Commerce and Diploma in Supply Chain Management all from
                        University of Nairobi. She ensures that the social welfare of all employee is safeguarded ranging from
                        recruitment, training, deployment and payment.
                        She is the lead expert in debt collection and recovery activities. 
                        </p> 
                        <h6 style={{color:' #FFD700'}}> PAVIN OCHIENG OGUTU</h6>
                        <p className="text-sm mb-6">
                        PAVINS holds a Diploma in Criminology and Security studies from Mmust. He is in charge of daily
                        appraisals, training, deployment and supervision of the guards on duty. Currently Pavin holds the
                        position of Security Supervisor 1 in the Operations Department. 
                          </p> 
                        
   

                    </div>
                </div>
            </div> 
            <FooterBar />
        </div>
    );
}

export default About;
