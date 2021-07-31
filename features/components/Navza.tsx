import React from "react";
import Link from "next/link";
// import 'tailwindcss/tailwind.css'

function Nav() {
  return (
    <>
      <nav className="flex justify-around items-center">
        <h2 className="text-xl font-semibold">manowsoda</h2>
        <div className="flex items-center">
          <Link href="/">
            <a className="p-3 hover:opacity-50">Home</a>
          </Link>

          <Link href="/aboutus">
            <a className="p-3 hover:opacity-50">AboutUs</a>
          </Link>

          <Link href="/cultural">
            <a className="p-3 hover:opacity-50">Cultural Maps</a>
          </Link>

          <Link href="/store">
            <a className="p-3 hover:opacity-50">Store</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
