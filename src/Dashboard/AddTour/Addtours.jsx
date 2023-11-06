import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import Tourdetail from '../../../Tourdetail';
import { Navigate, useNavigate } from 'react-router-dom';
import normalstyle from './Addtours.module.css'

const Addtours = () => {
    const[image, setImage] = useState()
    const [destination, setDestination] = useState('')
    const [Duration, setDuration] = useState('')
    const [GroupSize, setGroupSize] = useState('')
    const [Price, setPrice] = useState('')
    const navigate= useNavigate()


    const handleSubmit =(e)=>{
      let token = localStorage.getItem("token")
      let data = new FormData()
      data.append("backdropImage", image)
      data.append("destination",destination)
      data.append("Duration",Duration)
      data.append("GroupSize",GroupSize)
      data.append("Price",Price)


        e.preventDefault();
        axios.post("https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",data,{
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        })
             .then((Response)=> {
                console.log(Response)
                toast.success(Response.data.message);
                setTimeout(() => {
                navigate("/dashboard/Tourone")
                }, 3000);
                // location.reload()

             })
             .catch((error)=> {
              console.log(error)
              toast.error(error.response.data.message)
            })
    }


  return (
    <div className={normalstyle.formContainer}>
    <form onSubmit={handleSubmit}>
      <ToastContainer/>
            <p> Basic form</p>
            <label htmlFor="">Image</label>
            <input type="file" required= "required" onChange={(e)=>setImage(e.target.files[0])} />
            <label htmlFor="">Destination</label>
            <input 
            value={destination}
            onChange={(e)=>setDestination(e.target.value)}
            type="text" 
            required='required'
            placeholder='Mention Your Next Destination'/>
            <label htmlFor="">Duration</label>
            <input 
            value={Duration}
            onChange={(e)=>setDuration(e.target.value)}
            type="text"  
            required='required'
            placeholder='How will you spend(stay)'/>
            <label htmlFor="">Group_size</label>
            <input 
            value={GroupSize}
            onChange={(e)=>setGroupSize(e.target.value)}
            type="text"
            required='required'
            placeholder='Group_size'/>
            <label htmlFor="">Price</label>
            <input 
            value={Price}
            onChange={(e)=>setPrice(e.target.value)}
            type="text"  placeholder='Price in Dollar$'/>
            {/* <Link to={Tourdetail}> */}
                <button type='submit'>Add</button>
            {/* </Link> */}
        </form>
    </div>
    
  )
}

export default Addtours