import React, { useState } from "react";

export default function vidu() {
  const [showGioHang, setShowGioHang] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        onClick={() => {
          setShowGioHang(true);
        }}
        className="bg-blue-500 shadow rounded px-4 py-2 font-medium text-white"
      >
        Click
      </button>

      {showGioHang && (
        <div
          className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed inset-0"
          onClick={() => {
            setShowGioHang(false);
          }}
        >
          {/* <button
            onClick={() => {
              setShowGioHang(false);
            }}
            className="bg-blue-500 shadow rounded px-4 py-2 font-medium text-white"
          >
            Tắt giỏ hàng
          </button> */}
        </div>
      )}
    </div>
  );
}
