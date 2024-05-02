import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';


const FooterBar = () => {
  return (
    <div className="justify-center  items-center bg-gray-900 text-white py-4 text-center flex flex-col  ">
      <AiOutlineHome className="text-white text-3xl mb-2 " style={{ marginRight: '10px', color: 'yellow' }} />
      <p className="text-sm mb-0">OTTOMAN SECURITY GROUP SERVICE</p>
      <p className="text-sm mb-0">Your Reliable Security Partner</p>
      <p className="text-sm mb-0">Posta Flats, Kisumu-Kakamega Road</p>
      <p className="text-sm mb-0">P.O Box 3627-40100 </p>
      <p className="text-sm mb-0">KISUMU</p>
      <p className="text-sm mb-0">Kahawa Sukari,Bungoma Lane Behind</p>
      <p className="text-sm mb-0">Kahawa Sukari Baptist Church</p>
      <p className="text-sm mb-0">NAIROBI</p>
      <p className="text-sm mb-0">ottomansgs@gmail.com</p>
      <p className="text-sm mb-0">Telephone +254-741457805, +254-775144500</p>
      <p className="text-sm mb-0" >© 2024 Ottoman. All rights reserved.</p>

    </div>
  );
}
export default FooterBar;