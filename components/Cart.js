import React from "react";
import Product from "./Product";

export default function Cart({ products, setClose }) {
  return (
    <div
      className="bg-[white] w-[485px] h-[100%] fixed top-0 right-0 z-10 overflow-y-auto"
      // onClick={() => {
      //   setyeuthich(false);
      // }}
    >
      {" "}
      <div className="w-[400px] mx-auto mt-[20px]">
        <div className="flex justify-between">
          <div className="font-bold text-[20px]">Cart</div>
          <buton
            onClick={() => {
              setClose(false);
            }}
          >
            Đóng
          </buton>
        </div>
        {true ? (
          <ProducCart></ProducCart>
        ) : (
          <div>
            {" "}
            <div className="mt-[20px] w-[380px]">
              {" "}
              Looks like you haven’t added anything yet, let’s get you started!
            </div>
            <button className="w-[200px] h-[50px] bg-[black] text-[white] font-medium rounded-[5px] mt-[30px]">
              Continue shopping
            </button>
            <div className="mt-[20px]">Shop Best Sellers</div>
            <div className="grid grid-cols-2 gap-4">
              {products.map((sanPham) => {
                return (
                  <div>
                    <Product sanPham={sanPham}></Product>
                    <button className="rounded w-[180px] h-[40px] border-[1px] border-[gray] mt-4">
                      Add to Bag
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function ProducCart() {
  return (
    <div className="flex gap-[10px]">
      <img className="w-[100px]" src="/img/anh25.webp"></img>
      <div>
        <p>Men's New Balance Two WXY Basketball Shoes</p>
        <div className="text-[gray]">Color: Blue</div>
        <div className="text-[gray]">Size: M6</div>
      </div>
      <div className="font-bold">$200.00</div>
    </div>
  );
}
