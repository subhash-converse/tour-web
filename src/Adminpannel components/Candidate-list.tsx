import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Candidatelist from './Candidate-table'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Createjobvacancy = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=''>
      {/* title,add candidate button */}

      <div className='w-full pt-8 flex flex-col items-center md:flex-row md:justify-between'>
        <div className='text-[#029e9d] text-md'>
          <span>Dashboard</span>/<span className='text-[rgb(35,35,35)]'>Create A Candidate</span>
        </div>
        <div className='mt-7 md:mt-0'>
        <div>
      <Button className='dialog-button' onClick={handleClickOpen}>
      <FontAwesomeIcon icon={faPlus}/>Create A Candidate 
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create A Candidate"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='w-[700px]'>
            <input type="text" placeholder='id' className='dialoge-button' />
            <input type="text" placeholder='Name' className='dialoge-button' />
            <input type="text" placeholder='Email' className='dialoge-button'/>
            <input type="number" placeholder='Phone' className='dialoge-button'/>
            <input type="date" placeholder='DOB' className='dialoge-button flex'/>
            <input type="text" placeholder='Gender' className='dialoge-button'/>
            <input type="text" placeholder='Department' className='dialoge-button'/>
            <input type="file" placeholder='photo' className='dialoge-button'/>
            </div>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>   
        </DialogActions>
      </Dialog>
    </div>
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
        <Candidatelist/>
      </div>
        
    </div>
  )
}

export default Createjobvacancy