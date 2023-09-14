import { faArrowLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'; // Updated import path
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

const Addjovvacancy = () => {
  const validationSchema = Yup.object().shape({
    Openings: Yup.string().required('Openings is required'),
    Department: Yup.string().required('Department is required'),
    Location: Yup.string().required('Location is required'),
    PublishedDate: Yup.string().required('PublishedDate is required'),
    MainDuties: Yup.string().required('MainDuties is required'),
    Experience: Yup.string().required('Experience is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data:any) => {
    // Display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  };

  return (
    <div className="w-full">
      {/* Button */}
      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <a href="#" className="anchor-tag">Dashboard</a> / <span className="text-[#7987a1]">Add A Vacancy</span>
        </div>

        <div className="">
          <button className="Export-button">
            <Link to="/vacancylist">
              <span><FontAwesomeIcon icon={faArrowLeft} /></span>
              <span className="pl-[10px]">Back to List</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Add candidate form */}
      <div className="py-4 add-vacancy-form px-[3.5rem]">
        <div className="mt-5">
          <span className="text-[16px] font-bold">Add A Job</span>
        </div>

        <form className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-10 gap-y-10 mt-10" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings">Openings</label>
            <input
              type="text"
              id="Openings"
              {...register('Openings')}
              className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
            />
            <div className="invalid-feedback text-red-700 text-[12px]">{errors.Openings?.message}</div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings">Department</label>
            <input
              type="text"
              id="Department"
              {...register('Department')}
              className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"/>
            <div className="invalid-feedback  text-red-700 text-[12px]">{errors.Department?.message}</div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings  text-red-700">Location</label>
            <input
              type="text"
              id="Location"
              {...register('Location')}
              className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"/>
            <div className="invalid-feedback  text-red-700 text-[12px]">{errors.Location?.message}</div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings">Published date</label>
            <input
              type="Date"
              id="PublishedDate"
              {...register('PublishedDate')}
              className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"/>
            <div className="invalid-feedback  text-red-700 text-[12px]">{errors.PublishedDate?.message}</div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings">Main Duties</label>
            <textarea
              id="MainDuties"
              {...register('MainDuties')}
              className="border-[1px] px-3 w-full h-10 md:h-20 outline-none rounded-lg border-gray-200"/>
            <div className="invalid-feedback  text-red-700 text-[12px]">{errors.MainDuties?.message}</div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Openings">Experience</label>
            <textarea
              id="Experience"
              {...register('Experience')}
              className="border-[1px] px-3 w-full h-10 md:h-20   outline-none rounded-lg border-gray-200"/>
            <div className="invalid-feedback  text-red-700 text-[12px]">{errors.Experience?.message}</div>
          </div>

          <div className="flex justify-center mt-9">
            <button type="submit" className="Export-button">
              <span className="text-[15px]">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjovvacancy;
