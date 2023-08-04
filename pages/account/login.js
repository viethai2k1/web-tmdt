import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function login() {
  return (
    <Layout>
      <div className="w-[1280px] mx-auto">
        <div className="w-[1180px] mx-auto">
          <div className="w-[1180px] h-[350px] flex flex-col justify-center items-center gap-[20px]">
            <div className="text-[22px] font-semibold">SIGN IN.</div>
            <div className="flex flex-col gap-[20px] justify-center">
              <input
                placeholder="Email address *"
                className="w-[450px] h-[45px] rounded-[5px] border-[1px] border-[gray] pl-[20px]"
              ></input>
              <input
                placeholder="Password *"
                className="w-[450px] h-[45px] rounded-[5px] border-[1px] border-[gray] pl-[20px]"
              ></input>
              <button className="w-[450px] h-[45px] bg-[black] rounded-[5px] text-[white]">
                Sign in
              </button>
              <div className="border-[1px] "></div>
            </div>
            <div className=" w-[450px] flex text-[14px] justify-between">
              <div className="flex gap-[10px]">
                <div>New to Hydrogen?</div>
                <Link href="/account/signup">
                  <u>Create an account</u>
                </Link>
              </div>
              <div className="text-[gray]">Forgot password</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
