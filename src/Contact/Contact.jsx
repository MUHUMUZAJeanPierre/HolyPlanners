import contactstyle from './Contact.module.css'
import {RiContactsFill} from 'react-icons/ri'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineMedicalServices} from 'react-icons/md'


const Contact = () => {
  return (
   <div className={contactstyle.contactsection}>
     <div className={contactstyle.contact}>
      <div className={contactstyle.contactone}>
        <p>Contact Us</p>
      </div>
    </div>
    <div className={contactstyle.formone}>
      <div className={contactstyle.formoretwo}>
      <div className={contactstyle.form1}>
      <form action="" className=''>
       <div>  <input type="text" placeholder='Full Name *' className={contactstyle.input1}/></div>
       <div className='icon1'>
        {/* <HiOutlineMailOpen className='icon1'/> */}
        <input type="text" placeholder='Email *' className={contactstyle.input2}/> 
        </div>
       <div><input type="text" placeholder='Phone *' className={contactstyle.input3}/></div>
       <div><input type="text" placeholder='Services *' className={contactstyle.input4}/></div>
      </form>
      </div>
      <div className={contactstyle.textareaone}>
       <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className={contactstyle.buttonone}>
      <button>submit</button>
      </div>
    </div>
   </div>
   <div>
    <div className={contactstyle.whybook}>
        <h1>WHY BOOK WITH US?</h1>
        <p>Best Price Guarantee</p>
        <p>Customer care available 24/7</p>
        <p>Free Travel Insurance</p>
        <p>Hand-Picked Tours & Activities</p>
    </div>
    <div className={contactstyle.whybook1}>
        <h1>GET A QUESTION? </h1>
        <p>Do not hesitage to give us a cal. We are<br/>
        an expert team and we are happy to talk <br/>
        to you.
        </p>
        <p className={contactstyle.pone}>holidayplanners@gmail.com</p>
        <p className={contactstyle.ponetwo}>+1234567890</p>
        
    </div>
   </div>
   <div className={contactstyle.office}>
    <div className={contactstyle.officeside}>
      <div className={contactstyle.indiaoffice.whybook1}>
      <h2>INDIA OFFICE</h2>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">54, Beside Shopind Mall, Gujarat.</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">+1234567890</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">holidayplanners@gmail.com</label>
      </div>
      <div className={contactstyle.indiaoffice.usaoffice}>
      <h2>USA OFFICE</h2>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">54, Beside Shopind Mall, Gujarat.</label>
      <input className={contactstyle.checkbox} type="checkbox" name="" id="" />
      <label htmlFor="">+1234567890</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">holidayplanners@gmail.com</label>
      </div>
      <div className={contactstyle.indiaoffice.victoria}>
      <h2>VICTORIA OFFICE</h2>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">54, Beside Shopind Mall, Gujarat.</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">+1234567890</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">holidayplanners@gmail.com</label>
      </div>
      <div>

      </div>
    </div>
    <div>
      <img src="" alt="" />
    </div>
   </div>
   <div className='map'>
     
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327136879255!2d30.088148374085634!3d-1.9394676980429242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697554748952!5m2!1sen!2srw"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   </div>
   </div>
  )
}

export default Contact
