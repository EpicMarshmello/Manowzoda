import React from "react";
import Nav from "../features/components/Navza";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div
        style={{ backgroundImage: "url('/main.jpg')" }}
        className="bg-fixed h-screen"
      >
        <div className="h-full w-full bg-gradient-to-r from-black via-transparent ">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
