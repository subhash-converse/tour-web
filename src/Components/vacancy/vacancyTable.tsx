import { faDeleteLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function createData(
    id: number,
    img: string,
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
    createData(1,"img1","subhash","dddd@gmail.com",1234567890,"13/12/23","male","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
    createData(2,"img1","monika","dddd@gmail.com",1234567890,"13/12/23","female","csc"),
  ];

const Vacancytable = () => {
  return (
    <div className=''>
      <table className='w-full'>
        
          <tr className=' bg-white'>
            <th className=''> ID</th>
            <th >OPENINGS</th>
            <th >DEPARTMENT</th>
            <th >PUBLISH DATE</th>
            <th >LOCATION</th>
            <th >MAIN DUTIES</th>
            <th >EXPERIENCE</th>
            <th>ACTION</th>
          </tr>
        
        
          {rows.map((row) => (
            <tr>
              <td >{row.id}</td>
              <td >{row.img}</td>
              <td >{row.name}</td>
              <td >{row.email}</td>
              <td >{row.phone}</td>
              <td  className=''>{row.dob}</td>
              <td >{row.gender}</td>
              <td >{row.openings}</td>
              <td ><span className='action-buttons'><FontAwesomeIcon icon={faPenToSquare} className='tb-icon'/><FontAwesomeIcon icon={faDeleteLeft}className='tb-icon' /></span></td>
            </tr>
          ))}
        
      </table>
    </div>
  )
}

export default Vacancytable