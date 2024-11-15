// h2 className=" font-extrabold md:text-5xl text-2xl text-center md:text-left uppercase  max-w-[450px] mb-3">
//             our services
//           </h2>

import { useEffect, useState } from "react";
import { portfolioData } from "../../assets/constants";

function Portfolio()  {
  const [active, setActive] = useState("all");
  //   const [active, setActiveCategory] = useState("all");
  const [filteredData, setFilteredData] = useState(portfolioData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Filter data based on active category
    const filtered =
      active === "all"
        ? portfolioData
        : portfolioData.filter((item) => item.category === active);
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page whenever category changes
  }, [active]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="portfolio" className=" py-5 md:py-10">
      <h2 className=" capitalize font-extrabold md:text-5xl text-2xl text-center    mb-5">
        portfolio
      </h2>
      {/* category selsction  */}
      <div className=" flex justify-center items-center gap-3 md:gap-5">
        <button
          onClick={() => setActive("all")}
          className={` cursor-pointer capitalize  ${
            active == "all" ? "opacity-100" : 'opacity-40'
          }`}
        >
          all
        </button>
        <hr className="w-2 opacity-50" />
        <button
          onClick={() => setActive("ui")}
          className={` cursor-pointer capitalize   ${
            active == "ui" ? "opacity-100": 'opacity-40'
          }`}
        >
          UI/UX
        </button>
        <hr className="w-2 opacity-50" />
        <button
          onClick={() => setActive("graphics")}
          className={` cursor-pointer capitalize  ${
            active == "graphics" ? "opacity-100" : 'opacity-40'
          }`}
        >
          graphics{" "}
        </button>
        <hr className="w-2 opacity-50" />
        <button
          onClick={() => setActive("development")}
          className={` cursor-pointer capitalize  ${
            active == "development" ? "opacity-100" : 'opacity-40'
          }`}
        >
          development
        </button>
      </div>
      <div className="w-full  py-5 md:py-10 flex gap-7  md:min-h-[690px] items-start flex-wrap justify-center  ">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className=" border rounded-xl w-full max-w-[295px] aspect-square cursor-pointer flex items-end justify-stretch overflow-hidden  relative bg-contain  group "
            style={{
              backgroundImage: `url(${
                item.image || "https://picsum.photos/200"
              })`,
            }}
          >
            {/* <div className=" absolute"> */}
              <i className="bx bxs-right-top-arrow-circle text-xs max-md:text-6xl transition-all duration-500 ease-linear md:opacity-0 group-hover:opacity-100  group-hover:text-6xl top-1  right-1 absolute z-20"></i>
            {/* </div> */}
            <div className=" h-full w-full relative transition-all ease-linear duration-500 flex items-end md:-bottom-80  group-hover:bottom-0 bg-primary bg-opacity-45 md:bg-opacity-75 p-5">
              <h3 className=" text-[25px] font-extrabold max-w-[80%]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2  rounded disabled:opacity-30 enabled:hover:text-accent2 text-lg"
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2  rounded disabled:opacity-30 enabled:hover:text-accent2 text-lg"
        >
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
