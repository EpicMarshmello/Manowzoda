import React from "react";
import Link from "next/link";

var textShow = "dadada";

export default function Store() {
  return (
    <div className="h-full w-full bg-gray-200 ">
      <div className="h-full flex flex-row px-56  pt-20">
        <div className="h-5/6 w-2/6 flex flex-col pt-8 ">
          <div className="text-6xl font-bold  my-6">สินค้าชุมชน</div>
          <div className="text-3xl ">ขายอะไร </div>
          <div className="flex flex-col  my-10">
            <div className="flex flex-row items-center">
              <div className="bg-yellow-400 rounded-lg w-10 h-10 my-4 mr-5 "></div>
              <div className="text-3xl font-bold">อาหาร </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-green-600 rounded-lg w-10 h-10 my-4 mr-5 "></div>
              <div className="text-3xl font-bold">ต้นไม้ </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-blue-600 rounded-lg w-10 h-10 my-4 mr-5 "></div>
              <div className="text-3xl font-bold">หัตถกรรม </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-5/6 p-16">
          <div className="w-full h-4/5 p-12 flex flex-row ">
            <Link href="https://www.facebook.com/prasinpom">
              <div className=" w-1/3 h-full flex flex-col items-center shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 rounded-3xl cursor-pointer mx-3">
                <img
                  src="001.jpg"
                  className="rounded-3xl w-4/5 shadow-2xl my-6 "
                />
                <p className=" text-3xl font-bold ">ไอเหี้ยหนวด</p>
                <div className="bg-yellow-400 rounded-lg font-bold text-xl my-5 text-white p-2">
                  อาหาร
                </div>
              </div>
            </Link>
            <Link href="https://www.facebook.com/yasinam43">
              <div className=" w-1/3 h-full flex flex-col items-center shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 rounded-3xl cursor-pointer mx-3">
                <img
                  src="002.jpg"
                  className="rounded-3xl w-4/5 shadow-2xl my-6"
                />
                <p className=" text-3xl font-bold ">ไอเหี้ยเครา</p>
                <div className="bg-green-600 rounded-lg font-bold text-xl my-5 text-white p-2">
                  ต้นไม้
                </div>
              </div>
            </Link>
            <Link href="https://www.facebook.com/phasawit.chittrakul.3">
              <div className=" w-1/3 h-full flex flex-col items-center shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 rounded-3xl cursor-pointer mx-3">
                <img
                  src="003.jpg"
                  className="rounded-3xl w-4/5 shadow-2xl my-6"
                />
                <p className=" text-3xl font-bold ">ไอเหี้ยอ้วน</p>
                <div className="bg-blue-600 rounded-lg font-bold text-xl my-5 text-white p-2">
                  หัตถกรรม
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
