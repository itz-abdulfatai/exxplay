

// @desc sfdijfn ds
// @route dsfdgrjker

import { Route, Routes } from "react-router-dom"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
import Home from "./pages/Home"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Hidden from "./pages/Hidden"
import Demo from "./pages/Demo"
import CtgWaitlist from "./pages/CtgWaitlist"

// @access public
function App() {
  



  return ( 
    <>
    {/* <Header/> */}
    <Routes>
<Route path="/" exact element={<Home/>}/>
<Route path="/contact" element={<ContactPage/>}/>
<Route path="/waitlist" element={<CtgWaitlist/>}/>
<Route path="/12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f12f" element={<Hidden/>}/>
<Route path="/demo/:id" element={<Demo/>}/>
<Route path="*" element={<NotFound/>}/>
    
    </Routes>
     
    </>
  )
}

export default App
