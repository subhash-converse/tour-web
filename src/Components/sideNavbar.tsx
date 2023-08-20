import React, { useState } from 'react';
import  logo from '../Components/images/travalin logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBriefcase, faHeart, faMagnifyingGlass, faMinus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import "../App.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Allcandidate from './candidate/candidateList';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import img from '../Components/images/1.jpg';
import Vacancylist from './vacancy/vacancyList';
import Addjovvacancy from './addJob';



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
        <div className='w-full sticky top-0 flex border-b-[1px] border-gray-200 h-[60px] '>

          {(navVisible ? <div className='menu-bar  bg-white z-10 border-r-[1px] border-gray-200 pt-1 flex items-center min-w-[240px] px-[25px] '>
                         <a href="" className='w-full'><img src={logo}  alt="logo" className='  h-[29px] w-[131px] lg:inline-block lg:justify-self-start logo-trans'/></a>
                         <FontAwesomeIcon icon={faXmark} className='text-[rgb(121,135,161)] text-xl'  onClick={navication}/>
                         </div>
                          :
                          <div className='menu-bar min-w-[70px] z-[1] border-r-[1px] bg-white border-gray-200 p-5 flex items-center justify-center'>
                          <FontAwesomeIcon icon={faBars} className='text-[rgb(121,135,161)] flex justify-self-center'onClick={navication}  />
                         </div>
                          )}

       
      
           {/* search */}
           <div className='bg-white  w-full  flex items-center justify-between px-2 md:px-[25px]'>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=' hidden text-[rgb(121,135,161)] text-lg  md:inline-block'/>
                    <input type="text" placeholder='Search here...' className='outline-none hidden text-sm  py-[12px] px-[15px]  md:inline-block  md:w-[400px]'/>
                </div>

                <div className='flex items-center'>
                  <div className='w-[30px] '>
                     <NotificationsNoneIcon className='text-[#232323]' /> <Blink/>
                  </div>
                    <div className='w-[30px] mx-[5px]'>
                    <Avatar alt="Remy Sharp" src={img} style={{height:"28px", width:"30px"}}/>
                    </div>
                    
                 </div>
           </div>
      </div>

        {/* sidebar,contents */}
        <div className='flex  '>

         
          {(navVisible ? 
          <div className='menu-bar  fixed pt-[25px] pb-[50px] bg-white flex flex-col h-[92vh] border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[240px]  '>
            {/* user management */}
            <div className='px-[25px]'>
              <button className='flex items-center  py-[10px] w-full  nav-button'  onClick={toggleListVisibility}> 
                <span className='flex items-center w-full '>
                <span className=' text-start'><FontAwesomeIcon icon={faUser} className='navbar-icon'/></span>
                  <div className='w-full flex justify-between pl-2'> 
                   <span className='navbar-list'>User Management</span> 
                   <span className='text-[#6A6B6B]'>{isListVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
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
            <div className=' px-[25px]'>
            <button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} >
            <span className='flex  items-center w-full'>
              <span className='text-start'><FontAwesomeIcon icon={faBriefcase} className='navbar-icon' /></span>
              <div className='w-full flex justify-between pl-2 '>
                <span className='navbar-list'>Career Management</span>  
                <span className='text-[#6A6B6B]'>{isCareerVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
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
          <div className='menu-bar pt-[25px] pb-[50px]  hidden fixed bg-white  h-[92vh] border-r-[1px] border-gray-200 md:relative md:inline-block  w-[70px] '>
          {/* user management */}
          <div className=''>
            <button className='flex  px-[25px] items-center  w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}> 
              
              <span className='w-full'><FontAwesomeIcon icon={faUser} className='navbar-icon'/></span>
              
            </button>
          </div>
          {/* candidate */}
          <div className=''>
          <button className='nav-button  px-[25px] flex items-center  justify-between w-full nav-button' onClick={toggleCareerVisibility} >
          
            <span className='navbar-icon'><FontAwesomeIcon icon={faBriefcase} /></span>
          
          </button>               
          </div>
        </div> 
           )}

          {/* table or form content */}
          <div className='shadow-inner flex flex-col  shadow-gray-200 overflow-scroll w-full lg:h-[93vh]  md:justify-between '>
          <div className='p-[25px]'>
          <Allcandidate/>
          {/* <Vacancylist/> */}
          {/* <Addjovvacancy/> */}
          </div>
          
          
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