import React from 'react'
import Layout from '../../components/Layout'
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
export default function compare_1() {
  return (
    <div>
        <Layout>
          <div className='w-[1280px] mx-auto'>
            <div className='w-[1180px] mx-auto'>
              <div className='text-[30px] font-bold'>Compare Products</div>
              <div className='flex w-[250px] gap-[30px] relative'>
                <div className='mt-[240px] font-semibold'>Product</div>
                <div>
                  <button className='flex justify-center w-[250px] py-[20px] font-semibold'>Remove</button>
                  <img className='w-[250px]' src='/img/anh25.webp'></img>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center justify-between'>
                      <div className='mt-[20px] text-[#4B5563]'>New Balance</div>
                      <AiOutlineHeart className='text-[20px]'></AiOutlineHeart>
                    </div>
                    <div className='flex'>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                     
                    </div>
                    <div>Men's New Balance Two WXY Basketball Shoes</div>
                    <button className='w-[250px] h-[40px] border-[1px] border-[gray] rounded'>Add to Bag</button>
                  </div>

                </div>
                <div>
                  <button className='flex justify-center w-[250px] py-[20px] font-semibold'>Remove</button>
                  <img className='w-[250px]' src='/img/anh30.webp'></img>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center justify-between'>
                      <div className='mt-[20px] text-[#4B5563]'>New Balance</div>
                      <AiOutlineHeart className='text-[20px]'></AiOutlineHeart>
                    </div>
                    <div className='flex'>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                      <AiTwotoneStar className='text-[#FFA500]' ></AiTwotoneStar>
                     
                    </div>
                    <div>Men's New Balance Two WXY Basketball Shoes</div>
                    <button className='w-[250px] h-[40px] border-[1px] border-[gray] rounded'>Add to Bag</button>
                  </div>

                </div>
              </div>
              <div className='grid grid-cols-3 w-[600px] mt-[30px] '>
                <div className='flex flex-col gap-[20px]'>
                  <div className=' font-semibold'>Availability</div>
                  <div className=' font-semibold'>Price</div>
                  <div className=' font-semibold'>Vendor</div>
                  <div className=' font-semibold'>Color</div>
                  <div className=' font-semibold'>Size</div> 
                </div>
                <div className='flex flex-col gap-[20px]'>
                  <div>In Stock</div>
                  <div>$130$ 100.00</div>
                  <div>New Balance</div>
                  <div>Blue</div>
                  <div>M6</div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                  <div>In Stock</div>
                  <div>$130$ 100.00</div>
                  <div>New Balance</div>
                  <div>Blue</div>
                  <div>M6</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
    </div>
  )
}
