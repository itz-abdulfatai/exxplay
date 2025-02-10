import { useEffect, useState } from "react"
import { Circle } from "./Header"
import {  useLocation } from "react-router-dom"

function Nav() {
    const [active, setActive] = useState('home')
const path = useLocation()

useEffect(() => {
    switch (path.hash) {
        case '#home':
            setActive('home')
            
            break;
            case '#services':
            setActive('services')
            
            break;
            case '#portfolio':
            setActive('portfolio')
            
            break;
            case '#contact':
            setActive('contact')
            
            break;
            case '#reviews':
            setActive('reviews')
            
            break;

            case '#waitlist':
              setActive('waitlist')
              
              break;
            
    
        default:
            break;
    }

}, [path.hash])
    
  return (
    <nav className=" flex justify-center items-center gap-5 max-md:hidden">
      <a href="#home" onClick={()=> setActive('home')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "home"} /> home
      </a>
      <a href="#services" onClick={()=> setActive('services')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "services"} /> services
      </a>
      <a href="#portfolio" onClick={()=> setActive('portfolio')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "portfolio"} /> showcase
      </a>
      <a href="#waitlist" onClick={()=> setActive('waitlist')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "waitlist"} /> wishlist
      </a>

      {/* waitlist */}
      
      {/* <a href="#reviews" onClick={()=> setActive('reviews')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "reviews"} /> reviews
      </a> */}
    </nav>
  )
}

export default Nav