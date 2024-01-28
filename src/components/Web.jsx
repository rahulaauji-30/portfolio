import Sidebar from './Web/Sidebar'
import Navbar from './Web/Navbar'
import Project from './Web/Project'
import Projects from './Web/Projects'

import { Outlet } from 'react-router-dom'
export default function Web() {
  
  return (
    <div style={{display:"flex",flexDirection:"row",gap:"10px"}} className='app'>
      <Sidebar/>
      <div style={{width:"100%",display:"flex",alignItems:"center" ,gap:"30px"}}>
        <div class="main">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}