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
        <div
          className=" overflow-hidden w-full aspect-square max-w-[500px]  rounded-3xl cursor-pointer bg-cover flex justify-stretch items-stretch p-5 md:p-10 group "
          style={{
            backgroundImage: `url(${
              works[0].img || "https://picsum.photos/600"
            })`,
          }}
        >
            <div className="relative md:-bottom-[500px] md:group-hover:bottom-0 bg-[rgba(0,0,0,0.2)] rounded-3xl p-5 transition-all duration-200 ease-linear  flex flex-col gap-1 md:gap-5 items-center text-center justify-center glass-work border border-[#ffffff3b] group">
                <h3 className=" capitalize font-[800]">{works[0].name}</h3>

                <p className=" text-xs md:text-sm" >{works[0].description}</p>
                <i className=' text-5xl bx bxs-right-top-arrow-circle  group-hover:text-secondary '></i>
            </div>

        </div>
        {/* <div className=" w-full aspect-square max-w-[500px] bg-white rounded-3xl cursor-pointer "></div> */}
      </div>
    </section>
  );
}

export default Works;
