import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
export default function Product({ sanPham }) {
  console.log(sanPham);
  return (
    <div>
      <div>
        <div className="relative">
          <img src={sanPham.images[0].src}></img>
          <div className="w-[45px] h-[22px] text-[13px] bg-[red] text-[white]  absolute flex items-center justify-center top-[20px] right-[10px] rounded-[5px]">
            Sale
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between mt-[10px]">
          <div className="text-[15px] text-[gray]">{sanPham?.vendor}</div>
          <div className="flex gap-[10px] text-[22px]">
            <AiOutlineHeart></AiOutlineHeart>
            <BsArrowLeftRight></BsArrowLeftRight>
          </div>
        </div>
        <div className="flex text-[22px] gap-[3px]">
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
          <AiOutlineStar></AiOutlineStar>
        </div>
        <div className="text-[18px] font-semibold">
            {sanPham.title}
        </div>
        <div className="flex gap-[10px]">
          <del className="text-[gray]">$130</del>
          <div className="text-[red] font-bold">$100.00</div>
        </div>
      </div>
    </div>
  );
}
