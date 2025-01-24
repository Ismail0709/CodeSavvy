"use client";
import React from "react";
import Image from "next/image";
import laptop from '../../public/laptop.png';

export default function BusinessCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F3F9ED] p-8">
            <div className="flex justify-center items-start space-x-8">
                <div className="bg-[#F3F9ED] flex flex-col p-8 space-y-6 max-w-lg">
                    <span className="bg-[#F3F9ED] text-[#85C349] py-1 px-2 text-sm font-semibold rounded-full w-32 text-center">
                        For Business
                    </span>
                    <h1 className="text-5xl font-bold">
                        <span className="text-[#85C349]">Producers</span> & Markets
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Capture leads, engage customers and track your marketing efforts with
                        limited to no marketing expertise. Culineer makes it growing your
                        business easy!
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="bg-[#85C349] mr-2">✔</span> Increase sales and improve profits.
                        </li>
                        <li className="flex items-center">
                            <span className="bg-[#85C349] mr-2">✔</span> Streamlined marketing and data insights.
                        </li>
                    </ul>
                    <button className="bg-[#85C349] text-white py-3 px-8 rounded-full shadow hover:bg-green-700 transition duration-300">
                        Upgrade to a Professional Account
                    </button>
                </div>

                <div className="relative max-w-lg">
                    <Image
                        src={laptop} 
                        alt="Laptop"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
