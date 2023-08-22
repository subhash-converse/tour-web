import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Vacancylist from './vacancy/vacancyList'
import Vacancytable from './vacancy/vacancyTable'

const Addjovvacancy = () => {
  return (
    <div className='w-full '>
      {/* button */}
      <div className='w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between'>
        <div className='text-[#029e9d] text-sm'>
          <a href='#' className='anchor-tag'>Dashboard</a> / <span className='text-[#7987a1]'>Add A Vacancy</span>
        </div>

        <div className=''>
        <button className='Export-button'><Link to="/vacancylist">
          <span><FontAwesomeIcon icon={faArrowLeft} /></span>
          <span className='pl-[10px]'><Link to="/vacancylist">Back to List</Link> </span></Link>
          </button>
        </div>
      </div>

      {/* add candidate form */}
      <div className=' py-4 add-vacancy-form px-[3.5rem]' >

        <div>
          <span className='text-'>Add A Job</span>
        </div>
        
      <form className='w-full grid grid-cols-1 lg:grid-cols-2   justify-items-center gap-x-10 gap-y-10  mt-10'>
      <div className='flex flex-col w-full gap-2 '>
          <label htmlFor="candidateid" className=''>Openings</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>  
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Department</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Location</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Published Date</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Main Duties</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Experience</label>
          <input type="text" id='candidateid' className='border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200'/>
        </div>

        
        
      </form>
        
        <div className='flex justify-center mt-9'>
        <button className='Export-button'><span className='text-[15px]'>Submit</span></button>
        </div>
        </div>
        

   </div>
  
  )
}

export default Addjovvacancy