import React from 'react'
import userEditStyle from './Useredit.module.css'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import { Params } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserEdit = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userRole, setUserRole] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()
    const tourId = params.id
    const fetchUser = () => {
      const token = localStorage.getItem('token');
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log (response, "response");
        setUserName(response?.data?.fullName);
        setUserEmail(response?.data?.email);
        setUserRole(response?.data?.role);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    useEffect(() => {
      fetchUser();
    },[]);
    const handleSubmit = (e) => {
      let token=localStorage.getItem("token");
      setIsLoading(true)
      e.preventDefault();
    const data={
      "fullName": userName,
      "email":userEmail,
      "role":userRole,
    }
      axios({
        method:"PUT",
        url:`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${tourId}`  ,
        data: data,
        headers:{
            "content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }
    ).then((response)=>{
        console.log(response);
            toast.success("User-updated successfully");
            setIsLoading(false)
            setTimeout(()=>{
            navigate("/Dashboard/Users");
          },3000);
    }).catch((error)=>{
        console.log(error);
        toast.error(error.message);
        setIsLoading(false)
    });
};
  return (
    <div>
        <>
        <form className={userEditStyle.editCoverone} onSubmit={handleSubmit}>
            <ToastContainer/>
      
      
        <div>
          <p>Edit User</p>
        </div>
      <label htmlFor="">userName:</label>
      <input 
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      type="text" />
      <label htmlFor="">Email:</label>
      <input type="text"
      value={userEmail}
      onChange={(e)=>setUserEmail(e.target.value)}
       />
       <label>userRole</label>
       <input 
       value={userRole}
       onChange={(e)=>{setUserRole(e.target.value)}}
       type="text" />
       <div className='styles.twobutton'>
          <button type='submit'>Submit</button>
          <button>Cancel</button>
       </div>
       
    </form>
        </>
    </div>
  )
}

export default UserEdit