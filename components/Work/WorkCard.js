import React from "react";
import Image from "next/image";

function WorkCard({ item }) {
  return (
    <div className=" w-80 p-10 shadow-xl rounded-3xl ">
      {item.image}
      <p className="text-3xl font-semibold mb-9">{item.title}</p>
      <p className="text-xl">{item.text}</p>
    </div>
  );
}

export default WorkCard;
