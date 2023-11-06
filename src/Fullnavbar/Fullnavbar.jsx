import {BiLogoFacebook } from 'react-icons/bi'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import fullnavbar from './Fullnavbar.module.css'



// eslint-disable-next-line react/prop-types
function FullNavbar({setModal}) {

  return (
    <div className='fullnavbar.full'>
    <div className={fullnavbar.container}>

        <div className={fullnavbar.img}>
            <img src="holiday.png" alt="" />
        </div>
        <div className={fullnavbar.icons}>
            <AiOutlineCloseCircle className={fullnavbar.close} onClick={()=>{setModal(false)}}/>
            <BiLogoFacebook className={fullnavbar.facebook}/>
            <FaInstagram className={fullnavbar.instagram}/>
            < BsTwitter className={fullnavbar.twitter}/>
        </div>
        <nav>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/tour">Tour</a></li>
                <li><a href="/tourdetail">Tour detail</a></li>
                <li><a href="/Contact">Contact-Us</a></li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default FullNavbar