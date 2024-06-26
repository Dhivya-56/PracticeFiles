import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import axios from "axios";
const DataProcess1 = () => {
  const [state, setState] = useState([]);
  async function dataFetch() {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setState(res?.data?.results);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    dataFetch();
  }, []);
  console.log(state,"state")
  return (
    <div className="border-solid flex flex-col items-center justify-center">
      {state?.map((item) => {
      
      
        return <div className="border-solid border-2 flex flex-col">
          <MdOutlineMail className="text-[#085457] w-[100px] h-[100px]"/>
          <IoMdMail className="text-[#085457] w-[100px] h-[100px] "/>
            <p>  {item.name.title}.  {item?.name?.first}  {item?.name?.last}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.location.city}</p>
            <p>{item.dob.date}</p>
            <p>{item.gender}</p>
            
        </div>;
      })}
    </div>
  );
};

export default DataProcess1;
