import { Link, useLocation } from "react-router-dom";
import { socials } from "../assets/constants";
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [isHome, setIsHome] = useState(pathname == "/");
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    otherDetails: ''
  })

  useEffect(() => {

    if (status && status !== 'loading.....' ) {
      const timer = setTimeout(() => {
        setStatus('')
        console.log('status reset')
      }, 2000);


      return () => clearTimeout(timer)
    }

  }, [status])

  async function handleSubmit (e) {
    e.preventDefault() 
    setStatus('loading.....')
    try {
      const response = await axios.post('/api/contacts12f', {
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        ...(formData.otherDetails && { otherDetails: formData.otherDetails })
        
      })
      // console.log(response.data)
      setStatus(response.data.msg)
      
    } catch (error) {
      console.error(error.message)
      // console.log(response.data.msg)
      setStatus(error.message)
    }
    
  }

  return (
    <section className=" min-h-[60vh] " id="contact">
      <div className="p-5 glass-nav border  relative border-[#ffffff48] rounded-3xl md:p-10">
        {!isHome && (
          <Link to="/" className=" flex items-center mb-5 ">
            <i className="bx bx-arrow-back mr-5 "></i>
            <span className="underline">Home</span>{" "}
          </Link>
        )}
        <h2 className=" text-2xl md:text-5xl max-md:text-center mb-5 font-extrabold uppercase max-w-[600px]">
          Let&apos;s discuss your idea
        </h2>
        <div className=" flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full flex flex-col gap-5 md:justify-between">
            <p className=" text-sm max-w-[600px]">
              Feel free to contact us for any inquiries, collaborations, or
              project discussions. Our team is here to assist you. You can reach
              us via phone, email, or by filling out the contact form below. We
              look forward to hearing from you!
            </p>
            {/* contact */}
            <div>
              <div className=" flex items-center gap-3">
                {" "}
                <i className="bx  bx-envelope"></i> email@mail.com
              </div>
              <div className=" flex items-center gap-3">
                {" "}
                <i className="bx bx-mobile-alt"></i> 08088 088 088
              </div>
            </div>
            {/* socials */}

            <div className=" flex items-center gap-3">
              {socials.map((social, index) => {
                return (
                  <a
                    to={social.link}
                    target="_blank"
                    key={index}
                    className=" flex justify-stretch items-stretch"
                  >
                    {social.name == "facebook" ? (
                      <i className="bx w-full text-2xl hover:opacity-70 bxl-facebook-circle"></i>
                    ) : social.name == "twitter" ? (
                      <i className="bx w-full text-2xl hover:opacity-70 bxl-twitter"></i>
                    ) : social.name == "linkedIn" ? (
                      <i className="bx w-full text-2xl hover:opacity-70 bxl-linkedin"></i>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
          <form onSubmit={ handleSubmit} className="w-full flex flex-col gap-3 items-stretch max-w-[450px]">
            <input
            onChange={(e)=> setFormData({...formData, name: e.target.value})}
            value={formData.name}
              type="text"
              className=" focus:invalid:border-b-[#ff0000] bg-transparent border-b border-secondary outline-none placeholder:capitalize p-1"
              placeholder="name"
              required
            />
            <input
              type="email"
              onChange={(e)=> setFormData({...formData, email: e.target.value})}
              value={formData.email}
              className="focus:invalid:border-b-[#ff0000] bg-transparent border-b border-secondary outline-none placeholder:capitalize p-1"
              placeholder="email"
              required
            />
            <input
            onChange={(e)=> setFormData({...formData, companyName: e.target.value})}
            value={formData.companyName}
              type="text"
              className="focus:invalid:border-b-[#ff0000] bg-transparent border-b border-secondary outline-none placeholder:capitalize p-1"
              placeholder="company name"
              required
            />

            <textarea
              type="text"
              onChange={(e)=> setFormData({...formData, otherDetails: e.target.value})}
              value={formData.otherDetails}
              className=" resize-none focus:invalid:border-b-[#ff0000] bg-transparent border-b border-secondary outline-none placeholder:capitalize p-1"
              rows={1}
              placeholder="message (optional)"
            />
            <span className=" text-xs text-[#ff0000]">{status}</span>
            <button
              type="submit"
              
              className=" glass-btn py-2 hover:text-accent px-5 rounded-full self-start"
            >
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
