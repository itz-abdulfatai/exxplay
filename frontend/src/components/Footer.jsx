// import { useState } from "react"
// import { Circle } from "./Header"

import Nav from "./Nav"

function Footer() {
  // const [active, setActive] = useState('home')
  return (
    <footer className=" py-10 padding-x flex justify-between items-center">
      <div className=" font-syne font-extrabold  text-md  uppercase md:text-xl">
      exxplay <span className=" text-[8px] font-bold">from lightworks</span>
    </div>
    
    <Nav/>

    
    </footer>
  )

}

export default Footer