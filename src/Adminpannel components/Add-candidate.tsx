import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Addjovvacancy = () => {
  return (
    <div>
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
      <div className='w-full bg-green-400'>
        <div>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div></div>
        </div>
        
        

      </div>
    </div>
  )
}

export default Addjovvacancy