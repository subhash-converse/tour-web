import React, { useState } from 'react';
import  logo from '../images/travalin logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBriefcase, faHeart, faMagnifyingGlass, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import "../App.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Allcandidate from './Candidate-list';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import img from '../images/1.jpg'
import Vacancylist from './Vacancy-list';
import Addjovvacancy from './Add-candidate';



const Sidenavbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isCareerVisible, setIsCareerVisible] = useState(false);
  const [listButtonColor, setListButtonColor] = useState('black');
  const [careerButtonColor, setCareerButtonColor] = useState('black');
  const [navVisible,setNavVisible] =useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
    setListButtonColor(isListVisible ? 'black' : '#20B2AA');
  };

  const toggleCareerVisibility = () => {
    setIsCareerVisible(!isCareerVisible);
    setCareerButtonColor(isCareerVisible ? 'black' : '#20B2AA');
  };

  const navication=()=>{
    setNavVisible(!navVisible);
    console.log(navVisible)
  }

  const Blink=()=>{
    return<div className='notification-circle'>
      </div>
  }

  return (
       <div className='h-screen '>
        {/* logo,search */}
        <div className='w-full sticky top-0 flex border-b-[1px] border-gray-200 h-[65px] '>

          {(navVisible ? <div className='  bg-white z-10 border-r-[1px] border-gray-200 flex items-center   min-w-[242px] lg:min-w-[265px] px-[20px] justify-between menu-bar'>
                         <img src={logo} alt="logo" className=' h-[30px] max-w-[160px]  lg:inline-block lg:justify-self-start logo-trans'/>
                         <FontAwesomeIcon icon={faXmark} className='text-[#029e9d] 'onClick={navication}/>
                         </div>
                          :
                          <div className='min-w-[72px] text-center z-[1] border-r-[1px] bg-white border-gray-200 p-5 menu-bar'>
                          <FontAwesomeIcon icon={faBars} className='text-[#029e9d] self-center'onClick={navication}  />
                         </div>
                          )}

       
      
           {/* search */}
           <div className='bg-white  w-full  flex items-center justify-between  px-2 md:px-6'>
                <div className='flex items-center gap-2  md:gap-5'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=' hidden text-[#029e9d] md:inline-block'/>
                    <input type="text" placeholder='Search here...' className='outline-none hidden  md:inline-block  md:w-[400px]'/>
                </div>

                <div className='flex items-center gap-2  md:gap-5 '>
                    <NotificationsNoneIcon /> <Blink/>
                    <Avatar alt="Remy Sharp" src={img} style={{height:"30px", width:"30px"}}/>
                 </div>
           </div>
      </div>

        {/* sidebar,contents */}
        <div className='flex  '>

         
          {(navVisible ? 
          <div className=' pl-[20px] pr-[5px] fixed menu-bar bg-white flex flex-col h-[92vh] border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[242px] lg:min-w-[265px] '>
            {/* user management */}
            <div className='mt-4'>
              <button className='flex items-centerp  py-[10px] w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}> 
                <span className='flex gap-3 items-center w-full'>
                <span className='min-w-[25px] text-center'><PersonOutlineIcon/></span>
                  <div className='w-full flex justify-between'> 
                   <span>User Management</span> 
                   <span>{isListVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                  </div>
                </span>
              </button>

               {isListVisible && (
                  <ul className='list-type'>
                    <li className='nav-list'>All User Lists</li>  
                    <li className='nav-list'>Add User</li>
                  </ul>)}
            </div>
            {/* candidate */}
            <div className=''>
            <button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} style={{ color: careerButtonColor }}>
            <span className='flex gap-3 items-center w-full'>
              <span ><FontAwesomeIcon icon={faBriefcase} className='min-w-[25px] text-center ' /></span>
              <div className='w-full flex justify-between'>
                <span>Career Management</span>  
                <span>{isCareerVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
              </div>
            </span>
            </button>               
               {isCareerVisible && (
                  <ul className='list-type'>
                      <li className='nav-list' >All Job vacancies</li>
                      <li className='nav-list'>Add Job Vacancy</li>
                      <li className='nav-list'>All Candidate List</li>
                  </ul>)}
            </div>
          </div> :
          <div className=' px-[20px] menu-bar hidden fixed] bg-white  h-[92vh] border-r-[1px] border-gray-200 md:relative md:inline-block  min-w-[72px] '>
          {/* user management */}
          <div className='mt-4'>
            <button className='flex items-centerp py-[10px] w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}> 
              <span className='flex gap-3 items-center w-full'>
              <span className='min-w-[25px] text-center'><PersonOutlineIcon/></span>
              </span>
            </button>
          </div>
          {/* candidate */}
          <div className=''>
          <button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} style={{ color: careerButtonColor }}>
          <span className='flex gap-3 items-center w-full'>
            <span className='min-w-[25px] text-center '><FontAwesomeIcon icon={faBriefcase} /></span>
          </span>
          </button>               
          </div>
        </div> 
           )}

          {/* table or form content */}
          <div className='shadow-inner flex flex-col  shadow-gray-200 overflow-scroll w-full px-[10px] md:px-[30px] md:justify-between '>
          <Allcandidate/>
          {/* <Vacancylist/> */}
          {/* <Addjovvacancy/> */}
          
          {/* copy right */}
          <div className=' w-full flex p-5 flex-col text-[#029e9d] text-sm items-center border-t-[1px] border-gray-200 md:flex-row md: justify-between'>
            <span>Copyright <span>&copy;</span>2022 Travalin</span>
            <span>Powered By <span><FontAwesomeIcon icon={faHeart} /></span> Bizberg Themes</span>
          </div>
          </div>
          
          
        </div>
  </div>
  )
}

export default Sidenavbar