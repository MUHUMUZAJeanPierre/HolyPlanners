import {FiSearch} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaInstagram} from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import {HiChartBar} from 'react-icons/hi'
import { useState } from 'react'
import FullNavbar from './Fullnavbar/Fullnavbar'
import homestyle from './Home/Home.module.css'


 const Navbar = () => {
    const[modal,setModal]=useState(false)
        function openModal(){
        setModal((prevModal)=>!prevModal)
        }
  return (
    <>
    <div>
        
        {modal&&<FullNavbar setModal={setModal} />}
        <div className={homestyle.firstnav}>
          <div className={homestyle.navbarmain}>
        <div className={homestyle.navbar}>
        <p> <AiOutlineMail className={homestyle.emaail}/> holidaysplanner@gmail.com</p>
        <p>|</p>
        <p> <BiPhoneCall className={homestyle.call}/> +567890-987654</p>
        </div>
        <div className={homestyle.navbar2}>
          <BiLogoFacebook className={homestyle.facebook}/>
          <FaInstagram className={homestyle.instagram}/>
          < BsTwitter className={homestyle.twitter}/>
        </div>
      </div>
      <div className={homestyle.logo}>
        <img src='holiday.png' alt="" />
        <button>Reserve</button>
        < FiSearch className={homestyle.icon1}/>
        < HiChartBar onClick={openModal} className={homestyle.icon2}/>
      </div>
      </div>
    </div>
    </>
  )
  }

  export default Navbar