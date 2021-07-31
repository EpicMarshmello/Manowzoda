import React from "react";
import Link from "next/link";

var textShow =
  " เป็นจังหวัดที่ตั้งอยู่ทางภาคตะวันตกโดยเป็นศูนย์กลางในด้านอุตสาหกรรมแปรรูปสินค้าเกษตรและการปศุสัตว์ของประเทศจังหวัดราชบุรี ยังเป็นจังหวัดที่เศรษฐกิจดีที่สุดในภาคตะวันตก และเป็นจังหวัดที่มีเทศบาลเมืองมากที่สุดในภาคตะวันตกเช่นกัน ";

export const LandingPage = () => {
  //--------------------------
  //  RENDER
  //--------------------------
  return (
    <>
      <div className="h-5/6 w-1/4 ml-56 flex flex-col justify-center">
        <div className="text-8xl font-bold text-white my-10">ราชบุรี</div>
        <div className="text-xl text-white "> {'"' + textShow + '"'} </div>
        <Link href="/cultural">
          <button className="bg-white font-bold rounded-lg w-1/2 text-xl text-black my-6 p-3  transition duration-300 ease-in-out transform hover:scale-110 border-2 hover:bg-black hover:text-white ">
            <a>ดูเพิ่มเติม</a>
          </button>
        </Link>
      </div>
    </>
  );
};
