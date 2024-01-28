import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Projects from './components/Projects'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
      <Sidebar/>
      <div style={{width:"100%",display:"flex",alignItems:"center"}}>

        <div class="main">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
