import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import styles from "./Edittour.module.css"

const EditTour = () => {
  const [backdropImage,setBackdropImage] = useState("");
  const [destination, setDestination]= useState("");
  const [Duration, setDuration] = useState("");
  const [Group_size,setGroup_size] = useState("");
  const [Price, setPrice] = useState("");
  const navigate = useNavigate();
  const params = useParams()
  const tourId = params.id

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    setBackdropImage(file);
  }
  
  const fetchTour=()=>{
    const token = localStorage.getItem('token');
    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },
    }).then((response)=>{
      console.log(response,"response");
      setBackdropImage(response?.data?.backdropImage);
      setDestination(response?.data?.destination);
      setDuration(response?.data?.Duration);
      setGroup_size(response?.data?.Group_size);
      setPrice(response?.data?.Price);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    console.log(Price)
    fetchTour();
  },[])

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log(tourId)
    let token = localStorage.getItem("token")
    console.log(token)

    console.log("data to form", {
      backdropImage,
      destination,
      Duration,
      Group_size,
      Price
    })

    let data = new FormData();
    data.append("backDropImage", backdropImage);
    data.append("destination",destination);
    data.append("Duration", Duration);
    data.append("Group_size",Group_size);
    data.append("Price", Price);



    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
      method:"PUT",
      data: data,
      headers:{
        "content-type": "multipart/form-data",
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
      console.log(response);
      toast.success("Tour-updated successfully")
      setTimeout(()=>{
          navigate("/Dashboard/Tourone")
      },3000);
    }).catch((error)=>{
      console.log(error);
      toast.error(error);
    })

  }

  return (
    

    <form className={styles.editCoverone} onSubmit={handleSubmit}>
      <ToastContainer/>
      
      
        <div>
          <p>Edit Tour</p>
        </div>
        <label className={styles.block}>Destination_image:</label>
        <input type="file"
        // placeholder='image'
        accept='image/*'
        onChange={handleFileChange} />
      
      <label htmlFor="">Destination:</label>
      <input 
      value={destination}
      onChange={(e)=>setDestination(e.target.value)}
      type="text" />
      <label htmlFor="">Duration:</label>
      <input type="text"
      value={Duration}
      onChange={(e)=>setDuration(e.target.value)}
       />
       <label>Group_size:</label>
       <input 
       value={Group_size}
       onChange={(e)=>{setGroup_size(e.target.value)}}
       type="text" />
       <label>Price:</label>
       <input
       value={Price}
       onChange={(e)=>{setPrice(e.target.value)}}
       type="text" />
       <div className={styles.twoButton}>
          <button type='submit' className={styles.submit}>Submit</button>
          <button className={styles.cancel}>Cancel</button>
       </div>
       
    </form>
  )
}

export default EditTour