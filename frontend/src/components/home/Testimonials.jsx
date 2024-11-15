import { useState } from "react";
import { testimonials } from "../../assets/constants";

function Testimonials() {
  const [step, setStep] = useState(0);
  return (
    <section id="reviews" className=" min-h-[70vh]">
      <div className=" flex justify-between gap-4 items-center flex-col md:flex-row">
        <h2 className=" md:text-6xl max-w-[700px] max-md:mx-auto text-2xl max-md:text-center   uppercase font-extrabold ">
          what clients say <span className=" text-grad ">!</span>
        </h2>
        <div className=" flex justify-center gap-5 w-40  ">
          <button
            onClick={() => {
              //console.log('clicked')
              if (step !== 0) {
                //console.log(step);
                setStep(step - 1);
              }
            }}
            className=" flex justify-center items-center p-2 glass-btn rounded-full border"
          >
            <i className="  bx bxs-left-arrow"></i>
          </button>
          <button
            onClick={() => {
              //console.log('clicked')

              if (step < testimonials.length - 1) {
                //console.log(step + 1);
                setStep(step + 1);
              }
            }}
            className=" flex justify-center items-center p-2 glass-btn rounded-full border"
          >
            <i className="  bx bxs-right-arrow"></i>
          </button>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between gap-10 py-7">
        <div className=" w-full max-w-[400px] flex  flex-col gap-3">
          <div className=" flex gap-4 items-center  ">
            <span className=" font-syne text-grad text-5xl md:text-7xl font-extrabold ">
              &ldquo;{" "}
            </span>
            <h3 className=" text-2xl md:text-3xl">
              {testimonials[step].title}
            </h3>
          </div>
          <p className=" text-xs">{testimonials[step].text}</p>
          <hr className=" border-[#ffffff48]"/>
          <div className=" flex items-center py-3 md:px-10 gap-8">
            <img
              className=" max-w-full max-h-full w-12 aspect-square rounded-full"
              src={testimonials[step].avatar || "https://picsum.photos/200"}
              alt=""
            />
            <div>
              <h4 className=" text-lg font-bold">{testimonials[step].name}</h4>
              <span>{testimonials[step].position}</span>
            </div>
          </div>
        </div>
        
        {
          step < testimonials.length - 1 && 
          <div className=" w-full max-w-[400px] flex  flex-col gap-3">
          <div className=" flex gap-4 items-center  ">
            <span className=" font-syne text-grad text-5xl md:text-7xl font-extrabold ">
              &ldquo;{" "}
            </span>
            <h3 className=" text-2xl md:text-3xl">
              {testimonials[step + 1].title}
            </h3>
          </div>
          <p className=" text-xs">{testimonials[step + 1].text}</p>
          <hr  className=" border-[#ffffff48]"/>
          <div className=" flex items-center py-3 md:px-10 gap-8">
            <img
              className=" max-w-full max-h-full w-12 aspect-square rounded-full"
              src={testimonials[step + 1].avatar || "https://picsum.photos/200"}
              alt=""
            />
            <div>
              <h4 className=" text-lg font-bold">{testimonials[step + 1].name}</h4>
              <span>{testimonials[step + 1].position}</span>
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  );
}

export default Testimonials;
