/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="mx-32 grid grid-cols-3 gap-20">
      <div className="peer relative group overflow-hidden rounded-lg">
        <div className="w-full h-96">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
            alt=""
            className="transition-transform duration-500 w-full h-full object-cover group-hover:scale-125 group-hover:translate-y-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          <div className="transition-all duration-700 absolute inset-0 translate-x-32 translate-y-20 opacity-0 group-hover:translate-y-10 group-hover:opacity-100">
            <h1 className="capitalize mt-32 bg-orange-500 p-2 rounded-full w-20 text-center">
              test
            </h1>
          </div>
        </div>
      </div>
      <div className="peer relative group overflow-hidden rounded-lg">
        <div className="w-full h-96">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
            alt=""
            className="transition-transform duration-500 w-full h-full object-cover group-hover:scale-125 group-hover:translate-y-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          <div className="transition-all duration-700 absolute inset-0 translate-x-32 translate-y-20 opacity-0 group-hover:translate-y-10 group-hover:opacity-100">
            <h1 className="capitalize mt-32 bg-orange-500 p-2 rounded-full w-20 text-center">
              test
            </h1>
          </div>
        </div>
      </div>
      <div className="peer relative group overflow-hidden rounded-lg">
        <div className="w-full h-96">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
            alt=""
            className="transition-transform duration-500 w-full h-full object-cover group-hover:scale-125 group-hover:translate-y-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          <div className="transition-all duration-700 absolute inset-0 translate-x-32 translate-y-20 opacity-0 group-hover:translate-y-10 group-hover:opacity-100">
            <h1 className="capitalize mt-32 bg-orange-500 p-2 rounded-full w-20 text-center">
              test
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
