import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-20 mx-32">
      <div className="bg-[url('public/portofolio.png')]"></div>
      <div className="peer group bg-green-400 h-32 w-32 hover:bg-purple-400"></div>
      <div className="transition-all duration-700 peer-hover:[transform:rotateX(180deg)] bg-green-400 h-32 w-32 tra"></div>
      <div className="transition-all duration-700 peer-hover:[transform:rotateY(180deg)] [background-color:red] [transform-style:preserve-3d] h-32 w-32"></div>
    </div>
  );
}

export default page;
