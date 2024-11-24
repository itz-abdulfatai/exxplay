import { useState } from "react";
import { services } from "../../assets/constants";

function Services() {

  const [activeService, setActiveService] = useState(services[0])
  return (
    <section id="services" className=" py-5 md:py-10 flex justify-stretch items-stretch">
      <div className=" rounded-3xl service-bg relative flex flex-col items-stretch mx-auto w-full p-5 md:p-10 ">
        <div className=" md:h-28 flex flex-col gap-5 md:flex-row justify-between ">
          <h2 className=" font-extrabold md:text-5xl text-2xl text-center md:text-left uppercase  max-w-[450px] mb-3">
            our services
          </h2>
          <div className=" w-full max-w-[500px] text-xs md:text-sm text-center  md:text-right">
          We specialize in gamification solutions tailored to enhance engagement, drive growth, and create immersive experiences.
          </div>
        </div>
        <div className=" flex items-center gap-5 flex-wrap justify-center md:justify-start py-5 ">
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            design
          </div>
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            develop
          </div>
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            automate
          </div>
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            gamify
          </div>
        </div>
        <div>
          {
            services.map(service => (
<>
        <div key={service.name} onClick={()=> {if (activeService == service) {setActiveService(null)}else {setActiveService(service)}}} className="  md:min-h-20 md:px-5 gap-2 flex flex-col w-[97%] border-[#ffffff1a]  ">
        <div className="md:hover:bg-primary rounded-2xl px-5 flex justify-between items-center py-5 cursor-pointer">

          <h4 className=" text-xl  md:text-5xl font-bold">{service.name}</h4>
          <i className="bx bxs-right-top-arrow-circle text-4xl "></i>
        </div>
        <div className={`${service !== activeService ? 'h-0' : "h-auto" } transition-all duration-100 ease-linear` }>{service == activeService && service.description}</div>
        </div>
        <hr className=" w-full border my-5 border-[#ffffff0e]" />
</>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Services;
