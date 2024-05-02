import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineUser, AiOutlineTeam, AiOutlineHeart } from 'react-icons/ai';
import { FiMessageSquare, FiFolder } from 'react-icons/fi';
import { RiSettings4Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
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

  const modules = [
    { name: "Dashboard", link: '/', icon: MdOutlineDashboard },
    { name: "Services", link: '/services', icon: AiOutlineUser },
    { name: "About Us", link: '/about', icon: FiMessageSquare },
    { name: "Testimonials", link: '/testimonials', icon: FiFolder },
    { name: "Meet Our Team", link: '/team', icon: AiOutlineTeam },
    { name: "Blog/News", link: '/blog', icon: AiOutlineHeart },
    { name: "FAQs", link: '/faqs', icon: RiSettings4Line },
    { name: "Security Measures", link: '/security', icon: TbReportAnalytics },
  ];

  return (
    <div ref={sidebarRef} className='text-white' style={{ backgroundColor: '#1a365d', position: 'fixed', top: '0', left: '0', zIndex: '100', width: open ? '200px' : '40px', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', transition: 'width 0.3s ease', paddingLeft: '10px' }}>
      <div className='pb-1 pt-3'>
        <AiOutlineClose style={{ display: open ? 'block' : 'none' }} size={26} className='cursor-pointer mb-2' onClick={toggleSidebar} />

        <HiMenuAlt3 style={{ display: !open ? 'block' : 'none' }} size={26} className='cursor-pointer mb-2' onClick={toggleSidebar} />
      </div>
      <hr />
      <ul className="list-none p-0">
        {modules.map((module, index) => (
          <li key={index} className="mb-5">
            <Link to={module.link} className="flex mt-2 pb-1 hover:bg-gray-900 focus:bg-dark-900 rounded-lg transition duration-300 ease-in-out">
              <module.icon size={20} className="mt-2 mr-2 text-yellow-500" />
              <span className={`mt-2 ${open ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out opacity-${open ? '100' : '0'} ml-${open ? '2' : '0'}`}>{module.name}</span>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;
