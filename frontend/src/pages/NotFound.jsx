import { Link } from "react-router-dom"

function NotFound() {
  return (
    <section className=" flex flex-col justify-center items-center gap-3 "> 
    <h1 className=" text-9xl text-accent2">404</h1>
       <span className="text-xl">


        This page has not been created yet ......
       </span>
       <Link
      to="/"
      className=" uppercase px-3 md:px-5 py-[3px] md:py-[5px] border-2 rounded-full"
    >
      Home
    </Link>
        
    </section>
  )
}

export default NotFound