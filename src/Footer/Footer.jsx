
import footerstyle from './Footer.module.css'
import {FaCcPaypal, FaCcVisa} from 'react-icons/fa'
import {BiLogoMastercard, BiLogoFacebook} from 'react-icons/bi'
import {SiAmericanexpress} from 'react-icons/si'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <div>
        <footer>
                <div className={footerstyle.least}>
                        <div className={footerstyle.lastpara1}>
                            <img src="holiday.png" alt="" />
                            <p><span>Holiday Planners</span> sit amet consectetur adipisicing <br/>
                            elit. Perferendis sapiente tenetu officiis explicabo<br/>
                            fugit, sit mollitia eum atfue wxcepturi quaerat<br/>
                            autem.</p>
                            <input type="text" placeholder='Enter Your Email' />
                            <button>submit</button>
                            <div className={footerstyle.secondicons}>
                            <FaCcPaypal/>
                            <FaCcVisa/>
                            <BiLogoMastercard/>
                            <SiAmericanexpress/>
                            </div>
                        </div>
                            <div className={footerstyle.lastpara2}>
                            <nav>
                                <p>Navigation</p>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    {/* <li>Destination</li> */}
                                    <li><a href="">Tour</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">contact</a></li>
                                </ul>
                            </nav>
                            </div>
                        <div className={footerstyle.needhelp}>
                        <h2>Need Help ?</h2>
                        <div className={footerstyle.callus}>
                            <p>Call Us</p>
                            <p>+123 456 7890</p>
                        </div>
                        <div className={footerstyle.callus}>
                            <p>Email for Us</p>
                            <p>holidayplanners@gmail.com</p>
                        </div>
                        <div className={footerstyle.callus}>
                            <p>Location</p>
                            <p>Main Street, Victoria 8007</p>
                        </div>
                        <div className={footerstyle.callus}>
                            <p>Follow us</p>
                            <BiLogoFacebook className={footerstyle.face}/>
                            <FaInstagram className={footerstyle.instagram}/>
                            < BsTwitter className={footerstyle.twitter}/>
                        </div>
                        </div>
                    
                </div>
                <div className={footerstyle.last}>
                    <p>Copyright 2021 <span>Geek Code Lab</span>. All Rights Reserved.</p>
                    <p>Privacy Policy | Terms of use | Cookie Policy</p>
                    
                </div>
        </footer>
    </div>
  )
}

export default Footer