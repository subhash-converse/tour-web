import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Candidatelist from '../candidate/candidateTable'
import Vacancytable from '../vacancy/vacancyTable'

const Vacancylist = () => {
  return (
    <div className=''>
      {/* title,add candidate button */}

      <div className='w-full pt-8 flex flex-col items-center md:flex-row md:justify-between'>
        <div className='text-[#029e9d] text-md'>
          <span>Dashboard</span> / <span className='text-[rgb(35,35,35)]'>All Vacancy List</span>
        </div>
        <div className='mt-7 md:mt-0'>
        <button className='bg-[#029e9d] text-white px-4 py-3 rounded-xl flex gap-2'><span><FontAwesomeIcon icon={faPlus}/></span><span className='text-[15px]'>Add Candidate</span></button>
        </div>
      </div>

      {/* input fields */}

      <div className='shadows px-[20px] py-[25px] mt-5 xl:flex lg:items-center lg:justify-between '>
        <div>
          <span className='flex justify-center font-medium'>Main Catagory Lists</span>
        </div>

        <div className='flex flex-col  gap-y-7 mt-3 md:flex-row justify-between lg:mt-0 xl:w-[75%]'>
        <input type="text" placeholder='Search by catogory title' className='border-[1px] w-[full] border-gray-200  rounded-lg outline-none px-[10px] h-12 md:w-[210px]  xl:w-[350px]'/>
        <select name="catogory" id="catogory" className='border-[1px] w-full  border-gray-200 rounded-lg outline-none px-[10px] h-12 md:w-[210px]'>
          <option value="catogory" className='text-[#029e9d]'>catogory</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select name="entries" id="enrties" className='border-[1px] border-gray-200 w-full rounded-lg outline-none px-[10px] h-12 md:w-[210px]'>
          <option value="Show Entries">Show Entries</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        </div>
      </div>

      {/* candidate table */}
      <div className='my-[50px] shadows max-h-[375px] overflow-scroll lg:my-[60px]'>
        <Vacancytable/>
      </div>
        
    </div>
  )
}

export default Vacancylist