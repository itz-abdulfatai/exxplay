function Services() {
  return (
    <section id="services" className="flex justify-stretch items-stretch">
      <div className=" rounded-3xl service-bg relative flex flex-col items-stretch mx-auto w-full p-5 md:p-10 ">
        <div className=" md:h-28 flex flex-col gap-5 md:flex-row justify-between ">
          <h2 className=" font-extrabold md:text-5xl text-2xl text-center md:text-left uppercase  max-w-[450px] mb-3">
            our services
          </h2>
          <div className=" w-full max-w-[500px] text-xs md:text-sm text-center  md:text-right">
            at muiz we specialize at branding at muiz we specialize at
            brandingat muiz we specialize at brandingat muiz we specialize at
            brandingat muiz we specialize at brandinga
          </div>
        </div>
        <div className=" flex items-center gap-5 flex-wrap justify-center md:justify-start py-5 ">
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            design
          </div>
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            develop
          </div>
          <div className="  cursor-pointer uppercase hover:glass-btn py-[2px] px-3 border  rounded-full">
            seo
          </div>
          <div className="  cursor-pointer capitalize hover:glass-btn py-[2px] px-3 border  rounded-full">
            digital marketing
          </div>
        </div>
        <div>
          <div className=" md:h-20 md:px-5  md:items-center flex flex-col md:flex-row w-[97%] mx-auto justify-between  border-[#ffffff1a] md:hover:bg-primary rounded-2xl">
            <h4 className=" text-5xl font-bold">UI/UX DESIGN</h4>
            <i className="bx bxs-right-top-arrow-circle text-4xl "></i>
          </div>
          <hr className=" w-full border my-5 border-[#ffffff0e]" />
          <div className=" md:hover:bg-primary md:px-5 rounded-2xl md:h-20 capitalize md:items-center flex flex-col md:flex-row w-[97%] mx-auto justify-between  border-[#ffffff1a]">
            <h4 className=" text-5xl font-bold">branding</h4>
            <i className="bx bxs-right-top-arrow-circle text-4xl "></i>
          </div>
          <hr className=" w-full border my-5 border-[#ffffff0e]" />

          <div className=" md:hover:bg-primary md:px-5 rounded-2xl md:h-20 capitalize md:items-center flex flex-col md:flex-row w-[97%] mx-auto justify-between  border-[#ffffff1a]">
            <h4 className=" text-5xl font-bold">app design</h4>
            <i className="bx bxs-right-top-arrow-circle text-4xl "></i>
          </div>
          <hr className=" w-full border my-5 border-[#ffffff0e]" />

          <div className=" md:hover:bg-primary md:px-5 rounded-2xl md:h-20 capitalize md:items-center flex flex-col md:flex-row w-[97%] mx-auto justify-between  border-[#ffffff1a]">
            <h4 className=" text-5xl font-bold">logo design</h4>
            <i className="bx bxs-right-top-arrow-circle text-4xl "></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
