import React from "react";
import Image from "next/image";
import "./DreamCar.css";

export default function ViewMoreBtn() {
  return (
    <button className="view-more">
      View More
      <Image
        src="/icons/Vector.png"
        className="icon"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </button>
  );
}
