import { works } from "../../assets/constants";

function Works() {
  return (
    <section className=" py-5 md:py-10" id="portfolio">
      <h2 className=" capitalize font-extrabold md:text-5xl text-2xl text-center     mb-5 text-wrap">
        Interactive <span className="text-grad">Showcase</span>
      </h2>
      <p className=" text-xs md:text-sm text-center">
        Experience the Possibilities of Gamification
      </p>

      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center md:items-center gap-10 pt-10 ">

        {
          works.map((work, index) => (
            <div key={index}
          className=" relative flex-col  overflow-hidden w-full aspect-square max-w-[400px]  rounded-3xl cursor-pointer bg-cover flex justify-between items-stretch p-5 md:p-10 group "
          style={{
            backgroundImage: `url(${
              work.img || "https://picsum.photos/600"
            })`,
          }}
        > <h3 className="relative capitalize font-extrabold hidden md:block text-center text-sm transition-all duration-200 ease-linear group-hover:-translate-y-20 ">{work.name}</h3>
          <div className="  absolute bottom-10 right-10 hidden md:flex text-2xl rounded-full aspect-square box-border  justify-center items-center border-2 p-2 group-hover:hidden"><i className='bx bx-pointer'></i></div>
            <div className=" h-full w-full relative md:-bottom-[500px]  md:group-hover:bottom-5 bg-[rgba(0,0,0,0.2)] rounded-3xl p-5 transition-all duration-200 ease-linear  flex flex-col gap-1 md:gap-5 items-center text-center justify-center glass-work backdrop-blur-xl border border-[#ffffff3b] group">
                <h3 className=" capitalize font-[800] text-sm">{work.name}</h3>

                <p className=" text-xs md:text-sm" >{work.description}</p>
                {/* <i className=' text-5xl bx bxs-right-top-arrow-circle  group-hover:text-secondary '></i> */}
                <button className=" bg-transparent text-secondary border py-1 px-4 rounded-md capitalize font-bold hover:bg-secondary hover:text-accent2">demo</button>

            </div>

        </div>
          ))
        }
        
       
      </div>
    </section>
  );
}

export default Works;
