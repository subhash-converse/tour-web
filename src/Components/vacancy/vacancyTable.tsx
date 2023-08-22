import { faDeleteLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';

function createData(
    id: number,
    openings: string,
    department: string,
    publishDate: any,
    location:number,
    mainDuties: string,
    experience:string,
    
  ) {
    return { id,openings,department, publishDate,location, mainDuties, experience};
  }
  
  const rows = [
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee"),
    createData(1,"img1","csc","13/04/2002",1111,"mmmmmmmmmmmmmmmmmm","eeeeeeeeeeeee")

  ];

const Vacancytable = () => {
  return (
    <div className=''>
      <table className='w-full'>
        
          <tr className=' bg-white sticky top-0'>
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
              <td>{row.id}</td>
              <td>{row.openings}</td>
              <td>{row.department}</td>
              <td>{row.publishDate}</td>
              <td> {row.location}</td>
              <td><span className=' tb-icon'><FileOpenOutlinedIcon className=' tb-icon action-buttons'/> <span className=' tb-icon'>Main Duties</span></span></td>
              <td><span className=' tb-icon'><FileOpenOutlinedIcon className=' tb-icon action-buttons'/> <span className=' tb-icon'>Experience</span></span></td>
              <td><span className='action-buttons'><FontAwesomeIcon icon={faPenToSquare} className='tb-icon'/><BackspaceOutlinedIcon className='tb-icon'/></span></td>
            </tr>
          ))}
        
      </table>
    </div>
  )
}

export default Vacancytable