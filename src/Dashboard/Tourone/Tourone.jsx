

import { useState } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import {IoIosAddCircle} from 'react-icons/io' 
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'
// import Dashboardmain from './Dashboardmain';
import { Link } from 'react-router-dom';
import EditTour from '../EditTour/Edittour';
import mainstyle from './Tourone.module.css'
// import { navigate } from 'react-router-dom';
// import Edit from './EditTour';
import Notiflix from 'notiflix';


function Tourone() {
  const[tours, setTours] = useState([])
  // const [destination, setDestination] = useState('')
  // const [duration, setDuration] = useState('')
  // const [group, setGroup] = useState('')
  // const [prize, setPrize] = useState('')
  const [uduration, setUduration] = useState('')
  const [ugroup, setUgroup] = useState('')
  const [uprize, setUprize] = useState('')
  const [editDestination, setEditDestination] = useState('')
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setEditModalOpen((previsEditModal) => !previsEditModal);
    
  };


  const fetchTour = ()=>{

    let token = localStorage.getItem("token");
    console.log(token)

    axios({
      url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}` 
      },
    })
      .then((response)=>{
      console.log(response.data)
      setTours(response.data)
      toast.success(response.data.message);
      
    })
      .catch((error)=>{
        console.log(error)
    });

  };
  useEffect(()=>{
    fetchTour();
  },[])
const handleEdit = (destination)=>{
      setEditDestination(destination)
      axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/')
          .then(res=>{
            console.log(res.data)
            setUduration(res.data.duration)
            setUgroup(res.data.group)
            setUprize(res.data.prize)
          })
          .catch(er=>console.log(er))
          setEditDestination(destination)
}
useEffect(()=>{
  handleEdit()
},[])

// delete
const handleDelete = async(id)=>{
  console.log(id,"")
  if(window.confirm("are you sure you want to delete")){
    // let token=localStorage.getItem("token")
    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id} `,
      method:"DELETE",
      headers:{
        Authorization:"Bearer ${token}"
      }
    }).then((response)=>{
      toast.success("item deleted successfully")
      console.log(response,"response")
    }).catch((error)=>{
      toast.error(error.response.data.message)
      console.log(error,"error")
    })
  }
}
  return (
    <>
    <div className={mainstyle.tableWrapper}>
    {isEditModalOpen && <EditTour handleEditClick={handleEditClick} />}
    <div className={mainstyle.topbar}>
      <div className={mainstyle.topbar01}>
        <h1>Tours</h1>
        <div className={mainstyle.topbar02}>
          <Link to={'/dashboard/Addtours'} className={mainstyle.topbar023}>
          <button>
            <IoIosAddCircle className={mainstyle.iconi001}/> Add tour
          
          </button>
          </Link>
          
        </div>
      </div>
    </div>

 
      <table className={mainstyle.table}>
        <ToastContainer/>
        <thead>
          <tr>
            <th>destination image</th>
            <th>Destination</th>
            <th>Duration</th>
            <th>Group Size</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
         {tours.map((item,idx) =>(
            <tr key={idx}>
            <td><img className={mainstyle.image01} src={item.backdropImage} alt="view" /></td>
            <td>{item.destination}</td>
            <td>{item.Duration}</td>
            <td>{item.GroupSize}</td>
            <td>{item.Price}</td>
            <td>
              <span className={mainstyle.actions}>
                <BsFillTrashFill className={mainstyle.deleteicon} onClick={() => handleDelete(item._id)}
                  style={{ color: "red", cursor: "pointer" }}/>
                <Link
                  style={{ color: "black" }}
                  to={`/dashboard/Edittour/${item._id}`}
                >
                  <BsFillPencilFill  className={mainstyle.editicon} onClick={handleEditClick} />
                </Link>
                
              </span>
            </td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Tourone