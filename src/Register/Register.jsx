import {useState} from "react"
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook} from 'react-icons/im'
import axios from 'axios';
import registerstyle from './Resigter.module.css'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault();
        axios({
          url: 'https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup',
          method: 'POST',
          data: {
            email: email,
            password: password,
            firstName: firstName,
          },
        })
          .then((response) => {
            console.log(response);
            toast.success(response.data.message);
            // alert('Sign up successful');
            localStorage.setItem('token', response.data.access_token);
            navigate("/Login")

          })
          .catch((error) => {
            // console.log(error);
            toast.error(error.response.data.message)
            setTimeout(() => {
              navigate("/dashboard/Tourone")
              }, 3000);
            // alert('An error occurred');
          });
    
        setEmail('');
        setFirstName('');
        setPassword('');
      };
    return (
        <div className={registerstyle.signup}>
          <ToastContainer/>
      <div className={registerstyle.signuppage}>
          <div className={registerstyle.sinuppageinside}>
              <div className={registerstyle.signupinputside}>
                  <h1>Sign Up</h1>
                  <p className={registerstyle.paragra1}>Doesnt have an account yet? <a href="">Sign Up</a></p>
                  <p className={registerstyle.paragra2}>Full name</p>
                  <input
                  
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                  type="text"
                  placeholder='Full name'/>
                 
                  <p className={registerstyle.paragra2}>Email Adrress</p>
                  <input 
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  type="email" 
                  placeholder='you@example.com'/>
                  <p className={registerstyle.paragra3}>Password <a href="">Forgot Password?</a></p>
                  <input 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password" 
                  placeholder='Enter 6 character of more'/>
                  
                  <div className={registerstyle.signupcheckboxside}>
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                  </div>
                  <button 
                  onClick={handleSignup}
                  className='btn1'>
                    SignUp
                    </button>
                  <div className={registerstyle.optiontwo}>
                  <button className={registerstyle.google}><FcGoogle/>Google</button>
                  <button className={registerstyle.facebook}><ImFacebook/>Facebook</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    )
}

export default  Register