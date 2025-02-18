// import { useState } from "react"
// import { Circle } from "./Header"

import { useLocation } from "react-router-dom"
import Nav from "./Nav"

function Footer() {
  // const [active, setActive] = useState('home')

  const location = useLocation()

  
  return (
    <footer className=" py-10 padding-x flex justify-between items-center">
      <div className=" font-syne font-extrabold  text-md  uppercase md:text-xl">
      exxplay <span className=" text-[8px] font-bold">from lightwoorks</span>
    </div>

    {
      location.pathname == '/' &&

    <Nav/>
    }
    

    
    </footer>
  )

}

export default Footer