import './Tourdetail.css'
import {RiInformationLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {BsCameraFill} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Tourdetail = () => {



/*  =============================Fetching tour details =======================================  */
const [destinationImage, setDestinationImage] = useState()
const [destination, setDestination] = useState()
// const [title, setTile] = useState()
// const [] = useState()
// const [] = useState()
// const [] = useState()

const fectchTours = () =>{
  let token = localStorage.getItem("token")

  axios({
    url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
    method:"GET",
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  .then((response)=>{
    setDestination(response?.data?.destination);
    setDestinationImage(response?.data?.backdropImage)
    console.log(response.message)
  })
  .catch((error)=>{
    console.log(error.message)
  })
}
useEffect(()=>{
  fectchTours()
}, []);






/*  ====================================================================  */



/*  =============================Fetching book form  =======================================  */
const navigate = useNavigate()
const [bookFormName, setBookFormName] = useState()
const [bookFormEmail, setBookFormEmail] = useState()
const [bookFormPhone, setBookFormPhone] = useState()
const [bookFormDate,setBookFormDate] = useState()
const [bookFormTicketsNumber, setBookFormTicketsNumber] = useState()

const params = useParams();
let tourId = params.id;


const handleTourSubmit = (e)=>{
  e.preventDefault()
  let data = new FormData();

  data.append("tourID", tourId);
  data.append("fullname", bookFormName);
  data.append("email", bookFormEmail);
  data.append("phone", bookFormPhone)
  data.append("date", bookFormDate)
  data.append("numberOfTickets", bookFormTicketsNumber)

  let token = localStorage.getItem("token");
  console.log(token)

  axios({
    method:"POST",
    url:`https://holiday-planner-4lnj.onrender.com/api/v1/booking/create`,
    data: data,
    headers:{
      Authorization:`Bearer ${token}`,
      " Content-Type": "multipart/form-data",
    }
  }).then((response)=>{
    console.log(response)
    toast.success(response.data.message)
    setTimeout(()=>{
      navigate("/tour");
    },2000);
  }).catch((error)=>{
    console.log(error);
    toast.error(error.message)
  })
}


/*  ====================================================================  */


  
  
  return (
    <>
    <div className='tourdetail'>
        <div className="tourdeatailone"
        style={{ backgroundImage: `url(${destinationImage})` }}
        >
            <div className='tourdetailtwo'>
              <p>{destination}</p>
            </div>  
        </div>
        <div className='tourdetailthree'>
          <button>
            <RiInformationLine className='ri'/>
            <a href="">Information</a>
          </button>
          <button>
            <BsBook className='bs'/>
            <a href="">Tour Plan</a>
          </button>
          <button>
            <ImLocation2 className='im'/>
            <a href="">Location</a>
          </button>

          <button>
            <BsCameraFill className='bs
            '/>
          <a href="">Gallery</a>
          </button>

          <button>
            <BsPeopleFill className='bs'/>
          <a href="">Review</a>
          </button>


        </div>
        <div className='mapw'>
          <h1>Tour Location</h1>
          <div className='mapw2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327136879255!2d30.088148374085634!3d-1.9394676980429242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697554748952!5m2!1sen!2srw"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <h1>History Of The City</h1>
          <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless
          <br/><br/>
          I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless
          </p>
                  </div>
        <div className='findnowpage'>
          <ToastContainer/>
            <form action="">
            
            <h1>BOOK THIS TOUR</h1>
            <input type="text"
          
            onChange={(e)=>{
              e.preventDefault();
              setBookFormName(e.target.value)}}
            placeholder='Full Name *' />
            <input type="email"
            onChange={(e)=>{
              e.preventDefault();
              setBookFormEmail(e.target.value)}}
            placeholder='Email *?'/>
            <input type="email"
            onChange={(e)=>{
              e.preventDefault();
              setBookFormEmail(e.target.value)}}
            placeholder='Confirm Email' />
            <input type="tel"
            onChange={(e)=>{
              e.preventDefault()
              setBookFormPhone(e.target.value)}}
            placeholder='Phone *' />
            <input type="date"
            onChange={(e)=>{
              // value={bookFormDate}
              e.preventDefault()
              setBookFormDate(e.target.value)}}
            placeholder='date' />
            <input type="number"

            onChange={(e)=>{
              e.preventDefault()
              setBookFormTicketsNumber(parseInt(e.target.value))}}
            placeholder='Numbers Of Tickets' />
              <div className='findNowOne'> 
                <div className='findNowTwo'>
                <textarea placeholder='Message'></textarea>
                <div className='availability'>
                </div>
                </div>
                <button onClick={handleTourSubmit}>BOOK NOW</button>
              </div>
          </form>
        </div>
        </div>
        </>
  )}
export default Tourdetail
