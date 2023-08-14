import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Addjovvacancy = () => {
  return (
    <div className='w-full'>
      {/* button */}
      <div className='w-full pt-8 flex flex-col items-center md:flex-row md:justify-between'>
        <div className='text-[#029e9d] text-md'>
          <span>Dashboard</span> / <span className='text-[rgb(35,35,35)]'>All Candidate List</span>
        </div>
        <div className='mt-7 md:mt-0'>
        <button className='bg-[#029e9d] text-white px-4 py-3 rounded-xl flex gap-2'><span><FontAwesomeIcon icon={faArrowLeft} /></span><span className='text-[15px]'>Back To List</span></button>
        </div>
      </div>

      {/* add candidate form */}
      <form className='w-full grid grid-cols-1 lg:grid-cols-2 px-6 justify-items-center gap-3 lg:gap-6 mt-10'>
        
      <div className='flex flex-col w-full gap-2'>
          <label htmlFor="candidateid" className=''>Openings</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>  
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Openings</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Department</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Location</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Published Date</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Main Duties</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>
        <div className='flex flex-col w-full  gap-2'>
          <label htmlFor="candidateid" className=''>Experience</label>
          <input type="text" id='candidateid' className='border-[1px]  w-full h-10 outline-none rounded-lg border-gray-200'/>
        </div>

        
        
      </form>
        
        <div className='flex justify-center mt-9'>
        <button className='bg-[#029e9d] text-white px-5 py-3 rounded-xl flex gap-2'><span><FontAwesomeIcon icon={faArrowLeft} /></span><span className='text-[15px]'>Submit</span></button>
        </div>
        

   </div>
  
  )
}

export default Addjovvacancy