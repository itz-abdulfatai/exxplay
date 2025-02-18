import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Waitlist() {
  const [formData, setFormData] = useState({ name: "", mail: "", company: "",industry: "", price: '', expectation: '', feature: '',benefits: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);


  async function handleSubmit(e) {
    setLoading(true);
    setError(null);
    setSuccess(false);
    e.preventDefault();
    // console.log(formData);
    // console.log("Form submitted");

    try {
      const response = await axios.post(import.meta.env.VITE_MAKE_HOOK, formData);

      // console.log(response.data);
      // console.log(response)

      if (response.data == 'Accepted') {
        setSuccess(true);
      setLoading(false);
      setError(null);
      setFormData({ name: "", mail: "", company: "",industry: "", price: '', expectation: '', feature: '',benefits: '' });

      setTimeout(() => {setSuccess(false)}, 3000);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again later.");
      setSuccess(false);
      setLoading(false);


      
    }
  }

  function proceed () {
    setStep(step + 1)
    // console.log(step)
  }

  return (

    <>
    {/* header */}

    <header className=" padding-x py-7 absolute left-0 right-0 flex justify justify-between items-center">
    <div className=" font-syne font-extrabold  text-md  uppercase md:text-xl">
      exxplay
    </div>
    <Link
      to="/contact"
      className=" uppercase px-2 md:px-5 py-[3px] md:py-[5px] border-2 rounded-full"
    >
      contact now
    </Link>
  </header>

{/* {
      step == 1 && 
    <section className="flex flex-col gap-10 items-center py-20">
    
    </section>
    } */}

    {
    <section id="waitlist" className="gradient py-20 text-center bg-accent text-secondary">

      {
        step == 1 && 
        <div  className="flex flex-col items-center gap-5">
          <h1 className="text-xl md:text-3xl">the waitlist talk</h1>
    <div className="w-full max-w-[600px] flex flex-col items-center gap-5">
      <h2 className="text-xl">section heading</h2>
        <p className="text-justify">cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?</p>
      </div>      <div className="w-full max-w-[600px] flex flex-col items-center gap-5">
        <h2 className="text-xl">section heading</h2>
        <p className="text-justify">cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?</p>
      </div>      <div className="w-full max-w-[600px] flex flex-col items-center gap-5">
        <h2 className="text-xl">section heading</h2>
        <p className="text-justify">cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?cing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus possimus molestiae autem dolores adipisci culpa obcaecati soluta accusamus sapiente architecto iure pariatur vitae, quis quasi at ut ab? Laborum?</p>
      </div>

      <button onClick={() => proceed()} className=" disabled:bg-accent disabled:text-primary px-10 py-2 hover:text-primary hover:bg-secondary border border-secondary rounded-xl transition">
           show me the waitlist
          </button>
        </div>
      }

      {
      step == 2 && 
      <div className="flex flex-col gap-5 w-full max-w-[500px] mx-auto">
        <h2 className=" text-2xl">
          {" "}
          <span className="text-sm">Level Up Your Learning</span> <br /> Join
          the Waitlist for CTG
        </h2>
        <p>
          Turn learning into an adventure! CTG blends interactive challenges
          with AI-powered guidance to make mastering new skills fun and
          engaging. Be the first to experience i
        </p>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-5 sm:items-start "
        >
          <input
            type="text"
            required
            placeholder="Fullname"
            className="frm-input capitalize"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <div className="flex w-full gap-5">

          <input
            type="text"
            required
            placeholder="industry"
            className="frm-input capitalize"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            />
          <input
          required
          type="email"
          placeholder="Email address"
          className="frm-input lowercase"
          value={formData.mail}
          onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
          />
          </div>
          <input
            type="text"
            className="frm-input"
            placeholder="Company name"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
          <input
            type="text"
            inputMode="numeric"
            className="frm-input"
            placeholder="What's a fair price to pay for the game and software?"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            type="text"
            className="frm-input"
            placeholder="What are you expecting in the game and software?"
            value={formData.expectation}
            onChange={(e) =>
              setFormData({ ...formData, expectation: e.target.value })
            }
          />
           <input
            type="text"
            className="frm-input"
            placeholder="What's the best feature you'd want in the premium?"
            value={formData.feature}
            onChange={(e) =>
              setFormData({ ...formData, feature: e.target.value })
            }
          />
           <input
            type="text"
            className="frm-input"
            placeholder="What benefits would you want from the game and software?"
            value={formData.benefits}
            onChange={(e) =>
              setFormData({ ...formData, benefits: e.target.value })
            }
          />
             <span className="text-accent2 min-h-[20px] text-sm -my-3">{error ? error: ''}</span>
          {
            success && <span className="text-green-400 text-sm -my-3">info captured successfully, thanks for joining our waitlist</span>
          }

          <button disabled={loading} className=" disabled:bg-accent disabled:text-primary px-10 py-2 hover:text-primary hover:bg-secondary border border-secondary rounded-xl transition">
            {
              loading ? "Please wait..." : "Join the waitlist now"
            }
          </button>
        </form>
      </div>

      }

      
    </section>
    }


    <Footer/>
    </>
  );
}

export default Waitlist;
