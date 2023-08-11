import React from 'react';
import  logo from '../images/travalin logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMagnifyingGlass, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import "../App"

const Sidenavbar = () => {
  return (
    <div>
        {/* logo,search */}
        <div className='w-full flex border-b-[1px] border-gray-200 h-[60px] '>
            <div className='min-w-[72px]  border-r-[1px] border-gray-200 flex items-center justify-between md:min-w-[70px] lg:min-w-[220px] lg:justify-evenly'>
                   <img src={logo} alt="logo" className='hidden h-[30px] w-[160px]  lg:inline-block ' />
                   <FontAwesomeIcon icon={faBars} id='menu_icon' />
           </div>
           <div className='bg-white  w-full  flex items-center justify-between'>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='pl-2 md:pl-6 hidden md:inline-block' />
                    <input type="text" placeholder='Search here...' className='outline-none hidden pl-2 md:pl-5 md:inline-block  md:w-[400px]' />
                </div>

                <div className='flex items-center gap-2 pr-2 md:gap-5 md:pr-7'>
                    <FontAwesomeIcon icon={faBell} />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 </div>
           </div>
      </div>
        {/* sidebar,contents */}
        <div>
            {/* Sidenavbar */}
            <div></div>
            {/* content */}
            <div></div>
        </div>
    </div>
  )
}

export default Sidenavbar