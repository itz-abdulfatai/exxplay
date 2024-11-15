import { useState } from "react";
import { workflows } from "../../assets/constants";

function OurCustomWorkflow() {
  const [active, setActive] = useState(workflows[1]);
  return (
    <section className=" py-5 md:py-10 ">
      <h2 className="big mb-5">
        our customised <br />
        <span className=" text-grad"> workflow</span>
      </h2>
      <div>
        {workflows.map((flow, index) =>
          index < workflows.length / 2 ? (
            <div
              key={index}
              className={`items-center  cursor-pointer md:grid grid-cols-5 w-full h-32 py-5 hidden  ${
                active === flow ? "flow-trans" : 'hover:bg-accent2 hover:bg-opacity-5'
              } `}
              onClick={() => setActive(flow)}
            >
              <h3
                className={` relative text-center text-4xl col-span-2 flex  gap-4 justify-center transition-all duration-100 ease-linear ${
                  active == flow && "text-grad text-[42px]"
                }`}
              >
                <span className=" text-base align-top">0{index + 1} </span>{" "}
                {flow.title}{" "}
              </h3>
              <div className=" col-span-3">{flow.description}</div>
            </div>
          ) : (
            <div
              key={index}
              className={`items-center md:grid grid-cols-5 cursor-pointer w-full h-32 py-5 hidden  ${
                active === flow ? "flow-trans" : 'hover:bg-accent2 hover:bg-opacity-5'
              } `}
              onClick={() => setActive(flow)}
            >
              <div className=" col-span-3">{flow.description}</div>
              <h3
                className={` relative text-center text-4xl col-span-2 flex  gap-4 justify-center transition-all duration-100 ease-linear ${
                  active == flow && "text-grad text-[42px]"
                }`}
              >
                <span className=" text-base align-top">0{index + 1} </span>
                {flow.title}
              </h3>
            </div>
          )
        )}

        {workflows.map((flow, index) => (
          <div
            className={`md:hidden cursor-pointer flex flex-col gap-3 p-3 ${
              active === flow ? "flow-trans" : 'hover:bg-accent2 hover:bg-opacity-5'
            }`}
            key={index}
            onClick={() => setActive(flow)}

          >
            <div className="" >
              <h3 className={` flex gap-2 text-3xl ${active == flow && "text-grad"}`}>
                <span className=" text-base align-top">0{index + 1} </span>
                {flow.title}
              </h3>
            </div>
            <div className="">{flow.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCustomWorkflow;
