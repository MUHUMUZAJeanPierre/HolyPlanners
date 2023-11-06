import React from 'react'
import bookingstyle from './Booking.module.css'
import {BsFillPencilFill,BsFillTrashFill} from 'react-icons/bs'
import {IoIosAddCircle} from 'react-icons/io'
import { ToastContainer,toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Booking = () => {
const[booking,setBooking] =useState([])
const [isFetch, setIsFetch] = useState();
let token = localStorage.getItem('token')

const fetchBooking = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) =>{
    setBooking(response.data);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
    toast.error(error.message);
  });
};
useEffect(() =>{
  fetchBooking()
}, []);

  return (
    <div>
        
    <div className={bookingstyle.tableWrapper}>
      <table className={bookingstyle.tableRow}>
        <ToastContainer/>
        <thead>
          <tr className={bookingstyle.tableRowTwo}>
            <td>Image</td>
            <td>FullName</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Date</td>
            <td>Ticket Number</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          
         {booking.map((item,idx) =>(
            <tr key={idx} >
            <td><img className={bookingstyle.image01} src={item.backdropImage} alt="view" /></td>
            <td>{item.fullname}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.date}</td>
            <td>{item.numberOfTickets}</td>
            <td>
              <span className={bookingstyle.actions01}>
                <BsFillTrashFill className={bookingstyle.deleteicon} />
                <Link
                  style={{ color: "black" }}
                  to={`EditBooking`}
                >
                  <BsFillPencilFill  className={bookingstyle.editicon}/>
                </Link>
                
              </span>
            </td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Booking