
import Sidebar from './Sidebar/Sidebar'
// import Topbar from './Topbar'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboardMain'>
        <Sidebar/>
        <Outlet/>

    </div>
  )
}

export default Dashboard