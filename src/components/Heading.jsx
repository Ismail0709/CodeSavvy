"use client";
import React from "react";
import Image from "next/image";
import HeadingImage from "../../public/Heading.png"; 

export default function Heading() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={HeadingImage} 
        alt="Fullscreen Image"
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
