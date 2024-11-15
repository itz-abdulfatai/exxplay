import axios from "axios";
import { useEffect, useState } from "react";

function Hidden() {
  const [contacts, setContacts] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("/api/contacts12f");
        setContacts(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

    async function fetchLeads() {
      try {
        const response = await axios.get("/api/leads12f");
        setLeads(response.data);
      } catch (error) {
        console.error(error.message);
      }

    }
    fetchContacts();
    fetchLeads();
  }, []);
  return (
    <section>
      <h1 className=" text-center text-2xl md:text-5xl my-5 capitalize">
      </h1>

      {
        contacts && 
        <div className=" my-5">
        <h2 className=" text-center text-2xl md:text-5xl my-5 capitalize">
          messages
        exxplay
        </h2>
        <div className="relative overflow-scroll max-w-screen max-h-screen shadow-md rounded-lg">
          <table className=" w-full overflow-x-auto text-left">
            <thead className="capitalize bg-[#b2b8c6] text-[#ffffff]">
              <tr>
                <td className="py-1 border text-center  p-4">name</td>
                <td className="py-1 border text-center  p-4">email</td>
                <td className="py-1 border text-center  p-4">
                  company
                </td>
                <td className="py-1 border text-center  p-4">
                  message
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-500">
              {
                contacts.map((contact, index) => (
                    <tr key={index} className=" py-0">
                <td className=" py-0 border   p-4">{contact.name}</td>
                <td className=" py-0 border   p-4">{contact.email}</td>
                <td className=" py-0 border   p-4">{contact.companyName}</td>
                <td className=" py-0 border   p-4">
                  {contact.otherDetails}
                </td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      }

{
        leads && 
        <div className=" my-5">
        <h2 className=" text-center text-2xl md:text-5xl my-5 capitalize">
          leads
        </h2>
        <div className="relative overflow-scroll max-w-screen max-h-screen shadow-md rounded-lg">
          <table className=" w-full overflow-x-auto text-left">
            <thead className="capitalize bg-[#b2b8c6] text-[#ffffff]">
              <tr>
                <td className="py-1 border text-center  p-4">name</td>
                <td className="py-1 border text-center  p-4">email</td>
                <td className="py-1 border text-center  p-4">
                  company
                </td>
                
              </tr>
            </thead>
            <tbody className="bg-white text-gray-500">
              {
                leads.map((lead, index) => (
                    <tr key={index} className=" py-0">
                <td className=" py-0 border   p-4">{lead.name}</td>
                <td className=" py-0 border   p-4">{lead.email}</td>
                <td className=" py-0 border   p-4">{lead.companyName}</td>
                
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      }
    </section>
  );
}

export default Hidden;
