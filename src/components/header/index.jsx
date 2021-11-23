import './style.css'
import { useState } from 'react'

export default function Header() {
  const[active, setMode] = useState(false);
  const Togglemode = () =>{
    setMode(!active)


  }
 

    return (
      <header className="header">

        <a id="logo" href="index.html"><img src="travelnow.svg" alt="Logo" /></a>

        <div className={active ? "icon iconActive" :"icon"} onclick={Togglemode}>
          <div className='hambuerguer hamburguericon'></div>
        </div>
  
        <nav className={active ? "menuOpen" : "menuClose"}>
         
          <div id="navs">
              <a id="discover" href="#discover">Discover</a>
              <a href="#destination">Destination</a> 
              <a href="#about">About us</a>
          </div>

              <a href="#contactlink"><button id="book">Book A Tour</button></a>
                          
        </nav>

        <img className="menu" src="menu.svg" />
        
        
        
      </header>
    )
}
