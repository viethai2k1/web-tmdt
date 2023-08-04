import React, { useState } from "react";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export default function Product({ sanPham }) {

  const [thich, setthich] = useState(false);
  

  return (
    <div>
      <div>
        <Link href={`/Products/${sanPham.id}`} className="relative">
          <div
            className={`flex overflow-hidden ${
              sanPham.images.length < 2 ? "" : "product_1 "
            }`}
          >
            <img src={sanPham?.images[0]?.src}></img>
            <img src={sanPham?.images[1]?.src}></img>
          </div>
          <div className="w-[45px] h-[22px] text-[13px] bg-[#DC2626] text-[white]  absolute flex items-center justify-center top-[20px] right-[10px] rounded-[5px]">
            Sale
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between mt-[10px]">
          <div className="text-[15px] text-[gray]">{sanPham?.vendor}</div>
          <div className="flex gap-[10px] text-[22px]">
            <BsArrowLeftRight></BsArrowLeftRight>
            <div className="" onClick={() => {setthich(!thich)}}>
             {thich? <AiTwotoneHeart className="text-[black]"></AiTwotoneHeart>:<AiOutlineHeart></AiOutlineHeart> } 
            </div>
          </div>
        </div>
        <div className="flex text-[18px] gap-[3px]">
          <AiFillStar className="text-[#FFA500]"></AiFillStar>
          <AiFillStar className="text-[#FFA500]"></AiFillStar>
          <AiFillStar className="text-[#FFA500]"></AiFillStar>
          <AiFillStar className="text-[#FFA500]"></AiFillStar>
          <AiFillStar className="text-[#FFA500]"></AiFillStar>
        </div>
        <div className="text-[16px] font-semibold">{sanPham.title}</div>
        {sanPham.variants && (
          <div className="flex gap-[10px]">
            <del className="text-[gray]">
              {sanPham.variants[0].compare_at_price}
            </del>
            <div className="text-[#DC2626] font-bold">
              {sanPham.variants[0].price}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
