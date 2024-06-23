import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-[#030637] h-[300px] px-32 grid grid-cols-4 gap-10 pt-10">
        <h1 className="text-xs text-gray-500">Junx Web Developer</h1>
        <div>
          <p className="text-gray-500 text-xs capitalize border-b border-gray-500 pb-2 w-[150px]">
            the project developing
          </p>
          <ul className="text-xs text-gray-500 mt-5">
            <li className="my-2">E-Commerce</li>
            <li className="my-2">E-Learning</li>
            <li className="my-2">E-Event</li>
            <li className="my-2">E-Portofolio</li>
            <li className="my-2">Other</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 text-xs capitalize border-b border-gray-500 pb-2 w-[150px]">
            using technology
          </p>
          <ul className="text-xs text-gray-500 mt-5">
            <li className="my-2">ReactJs</li>
            <li className="my-2">Laravel</li>
            <li className="my-2">Bootstrap</li>
            <li className="my-2">Tailwind</li>
            <li className="my-2">Other</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 text-xs capitalize border-b border-gray-500 pb-2 w-[150px]">
            the services we provide
          </p>
          <ul className="text-xs text-gray-500 mt-5">
            <li className="my-2">ReactJs</li>
            <li className="my-2">Laravel</li>
            <li className="my-2">Bootstrap</li>
            <li className="my-2">Tailwind</li>
            <li className="my-2">Other</li>
          </ul>
        </div>
      </div>
      <p className="text-[10px] text-gray-500 text-center bg-[#030637] pb-5">
        &copy; Copy Right 2024 Junx Web Developer Reserved.
      </p>
    </div>
  );
}

export default Footer;
