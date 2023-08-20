import { faDeleteLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../images/1.jpg';

  
  function createData(
    id: number,
    img: string|any|File,
    name: string,
    email: any,
    phone:number,
    dob: string,
    gender:string,
    openings:string
  ) {
    return { id,img,name, email,phone, dob, gender,openings};
  }
  
  const rows = [
    createData(1,`${img}`,"subhash","dddd@gmail.com",1234567890,"13/12/23","male","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,`${img}`,"monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
  ];


const Candidatelist = () => {
  return (

    <div>
    
      <table className='w-full'>
        
          <tr className='fi bg-white '>
            <th className=''>Dessert id</th>
            <th >image</th>
            <th >name</th>
            <th >email</th>
            <th >phone</th>
            <th >dob</th>
            <th >gender</th>
            <th >department</th>
            <th >Action</th>
          </tr>
        
        
          {rows.map((row) => (
            <tr className=''>
              <td >{row.id}</td>
              <td ><img className='rounded-md h-[39px] w-[35px]' src={row.img} alt="user img" /></td>
              <td >{row.name}</td>
              <td >{row.email}</td>
              <td >{row.phone}</td>
              <td  className=''>{row.dob}</td>
              <td >{row.gender}</td>
              <td >{row.openings}</td>
              <td ><span className='flex gap-2 text-[#029e9d] justify-start'><FontAwesomeIcon icon={faPenToSquare}/><FontAwesomeIcon icon={faDeleteLeft} /></span></td>
            </tr>
          ))}
        
      </table>
    
    </div>
  )
}

export default Candidatelist