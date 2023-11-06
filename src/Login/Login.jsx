import { useState } from 'react'
import loginstyle from './Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook} from 'react-icons/im'
// import { axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState()
  const[password, setPassword] =useState()
  const navigate = useNavigate();
  console.log(email)
  console.log(password)

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios({
        url: 'https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',
        method: 'POST',
        data: {
          email: email,
          password: password,
        },
      
    })
      .then((response) => {
        console.log(response);
        toast.success("successfully login")
        localStorage.setItem('token', response.data.access_token);
        navigate("/Dashboard")
        setTimeout(()=>{
          if(response.data.user.role == "admin"){
            navigate("/dashboard");
          } else{
            navigate("/")
          }
        },3000)

      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message)
      });
      
    setEmail('');
    setPassword('');

  };


  return (
    <div className={loginstyle.login}>
      <ToastContainer/>
      <div className={loginstyle.loginpage}>
          <div className={loginstyle.loginpageinside}>
              <div className={loginstyle.inputside}>
                  <h1>Login</h1>
                  <p className={loginstyle.paragra1}>Doesnt have an account yet? </p><a href="/register">Sign Up</a>
                  <p className={loginstyle.paragra2}>Email Adrress</p>
                  <input 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email" 
                   placeholder='you@example.com'/>
                  <p className={loginstyle.paragra3}>Password <a href="">Forgot Password?</a></p>
                  <input 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password" 
                  placeholder='Enter 6 character of more'/>
                  <div className={loginstyle.checkboxside}>
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                  </div>
                  <button onClick={(e)=>handleSubmit(e)}>Login</button>
                  <div className={loginstyle.optiontwo}>
                  <button className={loginstyle.google}><FcGoogle/>Google</button>
                  <button className={loginstyle.facebook}><ImFacebook/>Facebook</button>
                  </div>
              </div>
              

              <div className={loginstyle.photoside}>
                  <img src="women.png" alt="" />
              </div>
          </div>
      </div>
    </div>
  )
}
export default Login
