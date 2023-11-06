import sidebarstyle from './Sidebar.module.css'
import {TbUsers} from 'react-icons/tb'
import {TbTournament} from 'react-icons/tb'
import {AiFillDashboard} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={sidebarstyle.dashboardsection}>
      <div className={sidebarstyle.dashboardsidebar}>
        <div className={sidebarstyle.img}>
          <Link to={"/"}>
            <img src="../../public/holiday.png" alt="" />
          </Link>
        </div>
        <h1>MAIN MENU</h1>
        <div className={sidebarstyle.dashboardsidebar01}>

          <span className={sidebarstyle.span01}>
            <AiFillDashboard className={sidebarstyle.i}/>
          <Link to={"Dashboardmain"}>Dashboard</Link>
          </span>

          <span className={sidebarstyle.span02}>
          <TbTournament  className={sidebarstyle.i}/>
            <Link to={"Tourone"}>Tour</Link>
          </span>

          <span className={sidebarstyle.span03}>
              <BiBookContent className={sidebarstyle.i}/>
            <Link to={"Booking"}>Booking</Link>
          </span>

          <span className={sidebarstyle.span04}>
            <TbUsers  className={sidebarstyle.i}/>
            <Link to={'Users'}>Users</Link>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar