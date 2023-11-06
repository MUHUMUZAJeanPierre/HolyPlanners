import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Login from './Login/Login';
import Contact from './Contact/Contact';
import Tour from './Tour/Tour';
import Navbar from './Navbar';
import Register from "./Register/Register";
import Tourdetail from '../Tourdetail';
import Dashboard from './Dashboard/Dashboard';
import User from './Dashboard/User';
import Tourone from './Dashboard/Tourone/Tourone';
import Dashboardmain from './Dashboard/Dashboardmain/Dashboardmain';
import Addtours from './Dashboard/AddTour/Addtours';
import EditTour from './Dashboard/EditTour/Edittour';
import Users from './Dashboard/Users/Users';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import UserEdit from './Dashboard/UserEdit/Useredit';
import Booking from './Dashboard/Booking/Booking';
import EditBooking from './Dashboard/EditBooking/EditBooking';

const  Layout = ( ) => {
  

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Routes>
          <Route  element ={<Layout/>}>
            <Route index path='/'  element={<Home/>}/>
            
            <Route path="/Contact" element={<Contact/>} />
            <Route path='/tour' element={<Tour />}/>
            {/* <Route path='/signup' element={<Signup />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path='/addtours' element={<Addtours/>}/>
            <Route path='/tourdetail/:id' element={<Tourdetail/>}/>
            
          </Route>
          
          <Route path='/login' element={<Login/>} />
            {/* <Route path="/register" element={<Register />} /> */}
          <Route path='/register' element={<Register/>}/>


          <Route path='/dashboard' element={<Dashboard/>} >
            {/* <Route index element ={<Outlet/>} />  */}
            <Route path='tourone' element={<Tourone/>}/>
            <Route path='dashboardmain' element={<Dashboardmain/>}/>
            <Route path='/dashboard/user' element={<User/>} />
            <Route path='Addtours' element={<Addtours/>}/>
            <Route path="Edittour/:id" element={<EditTour/>} />
            <Route path="Users/UserEdit/:id" element={<UserEdit/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='Booking' element={<Booking/>}/>
            <Route path='EditBooking' element={<EditBooking/>}/>
          </Route>

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
