"use client";
import React from "react";
import Image from "next/image";
import wave1 from "../../public/wave1.png";
import wave2 from "../../public/wave2.png";
import wave3 from "../../public/wave3.png";
import wave4 from "../../public/wave4.png";
import wave5 from "../../public/wave5.png";
import wave6 from "../../public/wave6.png";

export default function Community() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#F3F9ED] bg-[repeating-linear-gradient(45deg,#85C349_10px,#fff_10px,#fff_20px)]">
      {/* Heading */}
      <div className="absolute top-[15%] text-center px-4 md:px-6 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight mx-auto max-w-[90%] lg:max-w-[700px]">
          Start building your{" "}
          <span className="text-[#85C349]">market community</span> today
        </h1>
        <p className="text-gray-500 text-base md:text-lg mx-auto max-w-[80%] lg:max-w-[600px]">
          Join our community to stay updated with your favorite food producer
          or market
        </p>
      </div>

      <div className="absolute top-[35%]">
        <button className="px-8 py-4 text-lg md:text-xl bg-[#85C349] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all">
          Get Started
        </button>
      </div>

      <div className="absolute bottom-0 w-full flex justify-between items-end">
        <Image
          src={wave1}
          alt="Wave 1"
          className="w-[16.6%] object-cover"
          priority
        />
        <Image
          src={wave2}
          alt="Wave 2"
          className="w-[16.6%] object-cover"
          priority
        />
        <Image
          src={wave3}
          alt="Wave 3"
          className="w-[16.6%] object-cover"
          priority
        />
        <Image
          src={wave4}
          alt="Wave 4"
          className="w-[16.6%] object-cover"
          priority
        />
        <Image
          src={wave5}
          alt="Wave 5"
          className="w-[16.6%] object-cover"
          priority
        />
        <Image
          src={wave6}
          alt="Wave 6"
          className="w-[16.6%] object-cover"
          priority
        />
      </div>
    </div>
  );
}
