import React from "react";

var textShow =
  "ทัวริสต์เกรด สตรอเบอร์รีภูมิทัศน์ก๋ากั่นรูบิก โฮลวีตแยมโรล โฟล์ค แรลลี่เวสต์ แมกกาซีนไฟลต์บอกซ์ปฏิสัมพันธ์โมหจริต กฤษณ์คันยิ สึนามิแจ็กเก็ตสติกเกอร์ ฮิตเป่ายิ้งฉุบวีไอพี ทับซ้อนดีไซน์โมเต็ล วิลเลจเนิร์สเซอรี่ยาวีใช้งาน เนิร์สเซอรีวโรกาส ทัวร์นาเมนท์ ป๊อกซาฟารี เป่ายิงฉุบคณาญาติลิมิต เวอร์";

function AboutUs() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/img2.jpg')" }}
        className="bg-fixed bg-cover h-screen"
      >
        <div className="h-full w-full bg-gradient-to-r from-black via-transparent ">
          <div className="h-5/6 w-1/4 ml-56 flex flex-col justify-center ">
            <div className="text-7xl font-bold text-white my-10">เราเป็นใคร?</div>
            <div className="text-xl text-white "> {'"' + textShow + '"'} </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-4/5">
        <div className="w-4/5 ml-56 py-20 flex flex-col justify-center">
          <div className="text-7xl font-bold text-black my-10 ">
            มีใครบ้างในทีม?
          </div>
          <div className="flex p-14 ">
            <div className=" flex flex-col justify-center items-center">
              <img src="001.jpg" className="rounded-3xl w-1/2 shadow-2xl" />
              <div className="text-4xl font-bold m-5">Beard bastard</div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <img src="002.jpg" className="rounded-3xl w-1/2 shadow-2xl" />
              <div className="text-4xl font-bold m-5">Pussy enjoyer</div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <img src="003.jpg" className="rounded-3xl w-1/2 shadow-2xl" />
              <div className="text-4xl font-bold m-5">Buta yarou</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
