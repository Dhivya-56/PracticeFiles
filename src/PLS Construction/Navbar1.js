import React from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const Navbar1 = () => {
  return (
    <div className="">
      {/* <div className="fixed"> */}
      <Header className="flex justify-between border-solid border-2 bg-white h-[70px]">
        <div className=" flex ">
          <img src="Logopls.png" className="w-[70px] h-[66px]" />
          <Paragraph className="text-2xl text-[#9368e8] font-semibold items-center mt-[13px]">
            {" "}
            PLS CONSTRUCTIONS
          </Paragraph>
        </div>
        <div className="flex flex-col justify-left items-left  text-xl font-semibold ">
          <div className="flex gap-3">
            <IoIosMail />
            <Paragraph className="cursor-pointer">
              alagu_projects@gmail.com
            </Paragraph>
          </div>
          <div className="flex gap-3">
            <FaPhoneAlt className="text-blue-500" />
            <Paragraph className="">+91 9292229222 | +91 9488688821</Paragraph>
          </div>
        </div>
      </Header>
      {/* </div> */}
      <div className="  w-full h-[50px] flex gap-10 justify-around items-center text-xl font-semibold text-yellow-500 bg-gray-700">
        <Link to="/">Home</Link>
        <Link to="/service">Services</Link>
        <Link to="/price">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar1;
