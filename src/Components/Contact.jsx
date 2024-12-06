import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon" 
      data-aos="zoom-in-up"
      data-aos-duration = "1000"
      > 
        <a href='https://www.instagram.com/' className="items ">
          <AiFillInstagram className='icons'/>
        </a>
        <a href='https://www.facebook.com/' className="items ">
          <FaSquareFacebook className='icons'/>
        </a>
        <a href='https://www.google.com/' className="items ">
          <FaLinkedin className='icons'/>
        </a>
        <a href='https://www.google.com/' className="items ">
        <BsTelegram  className='icons'/>
        </a>
        <a href='https://www.google.com/' className="items ">
        <FaXTwitter className='icons '/>
        </a>
        <a href='https://www.github.com/' className="items ">
        <FaGithub className='icons'/>
        </a>
        <a href='mailto:webdevmastery@gmail.com' className="items ">
        <CgMail className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default contact