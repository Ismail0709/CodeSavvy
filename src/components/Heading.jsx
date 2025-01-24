"use client";
import React from "react";
import Image from "next/image";
import HeadingImage from "../../public/Heading.png"; // Replace with your image path

export default function Heading() {
  return (
    <div className="relative w-full h-screen">
      {/* Image */}
      <Image
        src={HeadingImage} // Path to your image
        alt="Fullscreen Image"
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
