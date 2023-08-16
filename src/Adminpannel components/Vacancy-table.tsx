import { faDeleteLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';


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
    <TableContainer className='h-scree' >
      <Table className='table'>
        
          <tr className='sticky top-0'>
            <th className=''> Id</th>
            <th >Openings</th>
            <th >Department</th>
            <th >Publish date</th>
            <th >Location</th>
            <th >Mainduties</th>
            <th >Experience</th>
            <th >department</th>
            <th>Action</th>
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
              <td ><span className='flex gap-2 text-[#029e9d] justify-center'><FontAwesomeIcon icon={faPenToSquare}/><FontAwesomeIcon icon={faDeleteLeft} /></span></td>
            </tr>
          ))}
        
      </Table>
    </TableContainer>
  )
}

export default Vacancytable