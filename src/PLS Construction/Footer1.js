import { Divider, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { FaTwitterSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer1 = () => {
  return (
    <div>
    <div className=" flex w-full  justify-between gap-5 h-[370px] border-solid border-2 bg-slate-200 mt-[50px] ">
      <div className="p-2">
        <Typography className="text-2xl text-slate-700 font-bold">
          About Our Company
        </Typography>
        <Divider className="bg-slate-700 w-[100px]"></Divider>
        <Paragraph className="w-[500px]  text-slate-700 font-semibold ml-7">
          PLS Property Developers ventured with a goal of offering the best
          product in affordable price range. We the PLS Property Developers are
          committed to excellence in all that we do. We believe that on time
          delivery of highest quality projects will bring many more valuable
          customers. We create positive, memorable experiences and lasting
          relationships because our actions are guided by our values.
        </Paragraph>
        <Paragraph className="w-[500px]   text-slate-700 font-semibold ml-7">
          Our success lies on employees dedication to excellent work, customer
          service that exceeds expectation. It is the result of our dedication
          and hard work that we have become one of the best promotersv in
          Trichy, Tamilnadu.
        </Paragraph>
      </div>
      <div className="flex flex-col p-2 "> 
        <div className="">
          <Typography className="text-2xl text-slate-700 font-bold">
            Contact Us
          </Typography>
          <Divider className="bg-slate-700 w-[100px] " />
          <Paragraph className="  text-slate-700 font-semibold ml-7" >
            D-72,
            <br />
            Pls Apartments,
            <br />
            Thillainagar 8th Cross East,
            <br />
            Tiruchirappalli-18.
            <br />
            Tamil Nadu, India.
            <br />
          </Paragraph>

          <Paragraph className="  text-slate-700 font-semibold ml-7">
            alagu_projects@gmail.com
            <br />
            +91 9398298302 | +91 3839839878 | +91 3838393909
          </Paragraph>
        </div>
        <div className="">
          <Typography  className="text-2xl text-slate-700 font-bold">Social Links</Typography>
          <Divider className="bg-slate-700 " />
          <Paragraph className="flex gap-5  text-slate-700 font-semibold ml-7 ">
            <FaTwitterSquare className="mt-[-3px]" />
            <FaFacebookSquare className="mt-[-3px]"/>
            <TfiYoutube className="mt-[-3px]"/>
            <FaLinkedin className="mt-[-3px]"/>
          </Paragraph>
        </div>
      </div>
      
    </div>
    <div className="bg-slate-700 h-[50px]">
<Paragraph className="text-normal text-slate-400 leading-tight p-3 text-center">Copyright &copy; 2009-2023-All rights Reserved-PLS's Property Developers</Paragraph>
    </div>
   </div>
  );


};

export default Footer1;
