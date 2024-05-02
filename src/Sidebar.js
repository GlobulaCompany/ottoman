import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineUser, AiOutlineTeam, AiOutlineHeart } from 'react-icons/ai';
import { FiMessageSquare, FiFolder } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div ref={sidebarRef} className='text-white' style={{ backgroundColor: '#1a365d', position: 'fixed', top: '0', left: '0', zIndex: '100', width: open ? '200px' : '40px', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', transition: 'width 0.3s ease', paddingLeft: '10px' }}>
      <div className='pb-1 pt-3'>
        <AiOutlineClose style={{ display: open ? 'block' : 'none' }} size={26} className='cursor-pointer mb-2' onClick={toggleSidebar} />
        <HiMenuAlt3 style={{ display: !open ? 'block' : 'none' }} size={26} className='cursor-pointer mb-2' onClick={toggleSidebar} />
      </div>
      <hr />
      <ul className="list-none p-0">
        {/* Manual display of modules */}
        <li className="mb-5">
          <a href="/" className="flex mt-2 pb-1 hover:bg-gray-900 focus:bg-dark-900 rounded-lg transition duration-300 ease-in-out">
            <MdOutlineDashboard size={20} className="mt-2 mr-2 text-yellow-500" />
            <span className={`mt-2 ${open ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out opacity-${open ? '100' : '0'} ml-${open ? '2' : '0'}`}>Dashboard</span>
          </a>
        </li>
        <li className="mb-5">
          <a href="/services" className="flex mt-2 pb-1 hover:bg-gray-900 focus:bg-dark-900 rounded-lg transition duration-300 ease-in-out">
            <AiOutlineUser size={20} className="mt-2 mr-2 text-yellow-500" />
            <span className={`mt-2 ${open ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out opacity-${open ? '100' : '0'} ml-${open ? '2' : '0'}`}>Services</span>
          </a>
        </li>
        {/* Add more manual entries for other modules */}
      </ul>
    </div>
  );
}

export default Sidebar;
