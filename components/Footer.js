import React from 'react'
import { BiSolidPaperPlane } from "react-icons/bi";
import { FaMapMarkerAlt,FaPinterest } from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BsTelephoneOutbound, BsFacebook} from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className=' bg-[black] '>
          <div className='w-[1280px] mx-auto mt-[100px] '>
            <div className='w-[1180px] h-[90px] mx-auto  flex items-center justify-between  text-[white]'>
                  <div className='flex gap-[15px] text-[22px]'>
                      <BiSolidPaperPlane className='text-[30px]'></BiSolidPaperPlane>
                      <div>Sign up to Newsletter</div>
                  </div>
                  <div>
                     ...and reveive $20 coupon for first shopping
                  </div>
                  <div className='relative'>
                      <button  className='w-[100px] h-[50px] bg-[red] rounded-e-full absolute ml-[400px] '>JOIN</button>
                      <input className='w-[500px] h-[50px] rounded-[50px] pl-[20px] ' placeholder='Your email address '></input> 
                  </div>
            </div>
          </div>
      </div>
      <div className=''>
          <div className='w-[1280px] mx-auto '> 
              <div className='w-[1180px] mx-auto flex justify-between mt-[60px]'>
                <div className='flex flex-col gap-[20px]'>
                  <div className=''>
                      <div className='font-bold'>OUR STORE</div>
                      <div className='w-[350px]'>We have specialized in delivering the best e-Commerce solutions
                        in both B2B/ B2C markets with the world-class platforms.
                      </div>
                  </div>
                  <div className='flex items-center gap-[15px]' >
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <div  className='w-[300px]' >1418 River Drive, Suite 35 Cottonhall, CA 9622, United States.</div>
                  </div>
                  <div className='flex items-center gap-[15px]'>
                    <AiOutlineMail></AiOutlineMail>
                    <div>Email: sale@owenstore.com</div>
                  </div>
                  <div className='flex items-center gap-[15px] '>
                    <BsTelephoneOutbound></BsTelephoneOutbound>
                    <div>Support: +91333444555</div>
                  </div>
                </div>
                
                  <div className='flex gap-[15px] flex-col'>
                  <div className='font-semibold '>COMPANY</div>
                  <div>About Us</div>
                  <div>Careers</div>
                  <div>Affiliates</div>
                  <div>Blog</div>
                  <div>Orders and Returns</div>
                  <div>Contact Us</div>
                </div>
                <div className='flex gap-[15px] flex-col'>
                  <div className='font-semibold'>SHOPS</div>
                  <div>New Arrivals</div>
                  <div>Accessories</div>
                  <div>Men</div>
                  <div>Women</div>
                  <div>Brands</div>
                  <div>Shop All</div>
                </div>
                <div className='flex gap-[15px] flex-col'>
                  <div className='font-semibold'>HELPS</div>
                  <div>Customer Service</div>
                  <div>My Account</div>
                  <div> Find a Store</div>
                  <div>legal & Privacy</div>
                  <div>Gift Card</div>
                  <div>Tems & Conditions</div>
                </div>
                <div className='flex gap-[15px] flex-col'>
                  <div className='font-semibold'>OPENING TIME</div>
                  <div>Mon - Fri:8AM - 9PM</div>
                  <div>Sat: 9AM - 8PM</div>
                  <div>Sun: Closed</div>


                  <div className='flex gap-[10px] text-[23px]'>
                    <BsFacebook></BsFacebook>
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <AiOutlineInstagram></AiOutlineInstagram>
                    <FaPinterest></FaPinterest>
                    <AiFillYoutube></AiFillYoutube>
                  </div>
                </div>

              </div>
              
          </div>
      </div>
      <div className=' bg-[#E5E7EB] mt-[40px] mb-[40px]'>
          <div className='w-[1280px] mx-auto'>
              <div className='w-[1180px] h-[50px] mx-auto  flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                  <div className='border-[1px] border-[black] w-[20px] h-[20px] rounded-[30px] flex items-center justify-center'>C</div>
                  <div> 2023, Owen Demo Powered <u>by shopifyhydrogen.io</u></div>
                </div>
                <div>
                  <img className='w-[250px]' src='https://demo.shopifyhydrogen.io/sanity/5fce17daaede12e1470fae70393dbc47c22c1bc1-249x25.png?width=498&height=50&crop=center'></img>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
