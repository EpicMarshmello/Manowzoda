import { BodyItem } from "../components/bodyComponent";
import React from "react";
import Head from "next/head";

export const LandingPage = () => {
  //--------------------------
  //  RENDER
  //--------------------------
  return (
    <div
      style={{ backgroundImage: "url('/main.jpg')" }}
      className="w-screen h-screen bg-fixed "
    >
      <div className="h-full w-full bg-gradient-to-r from-black via-transparent ">
        <BodyItem />
      </div>
    </div>
  );
};
