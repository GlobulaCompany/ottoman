import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';


const FooterBar = () => {
  return (
    <div className="justify-center  items-center bg-gray-900 text-white py-4 text-center flex flex-col  ">
      
      <AiOutlineHome className="text-white text-3xl mb-2 text-yellow-500" style={{ marginRight: '10px',  }} />
      <p className="text-sm mb-0">OTTOMAN SECURITY GROUP SERVICES LTD</p>
      <p className="text-sm mb-0">Your Reliable Security Partner</p>
      <p className="text-sm mb-0">Posta Flats, Kisumu-Kakamega Road</p>
      <p className="text-sm mb-0">P.O Box 3627-40100 </p>
      <p className="text-sm mb-0">KISUMU</p>
      <p className="text-sm mb-0">Kahawa Sukari,Business Center Bungoma Road</p>
      <p className="text-sm mb-0">NAIROBI</p>
      <p className="text-sm mb-0">ottomansgs@gmail.com</p>
      <p className="text-sm mb-0">Telephone +254-741457805, +254-775144500</p>
      <a className="text-sm mb-0" href='https://github.com/anida15' style={{ fontSize: '0.8rem' }}>© 2024 Ottoman. Powered by Snowpiercers.</a>

    </div>
  );
}
export default FooterBar;