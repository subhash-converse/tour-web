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


const Candidatelist = () => {
  return (
    
    <TableContainer >
      <Table className='table'>
        
          <tr>
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

export default Candidatelist