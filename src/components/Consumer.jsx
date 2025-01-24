"use client";
import React from "react";
import Image from "next/image";
import laptop from '../../public/laptop.png';

export default function ConsumerCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F3F9ED] p-8">
            <div className="flex justify-center items-start space-x-8">
                <div className="relative max-w-lg">
                    <Image
                        src={laptop} 
                        alt="Laptop"
                        className="w-full"
                    />
                </div>

                <div className="bg-[#F3F9ED] flex flex-col p-8 space-y-6 max-w-lg">
                    <span className="bg-[#F3F9ED] text-[#85C349] py-1 px-2 text-sm font-semibold rounded-full w-32 text-center">
                        For Consumers
                    </span>
                    <h1 className="text-5xl font-bold">
                        <span className="text-[#85C349]">Home Cook</span> & <span className="text-[#85C349]">Chefs</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Find local producers in your area, get reminders to go to market,
                        know what's available each week. Learn about ingredients and growing practices, 
                        be inspired by new recipes.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="bg-[#85C349] mr-2">✔</span> Easier access to local ingredients.
                        </li>
                        <li className="flex items-center">
                            <span className="bg-[#85C349] mr-2">✔</span> Improved eating habits and confidence in food quality.
                        </li>
                    </ul>
                    <button className="bg-[#85C349] text-white py-3 px-8 rounded-full shadow hover:bg-green-700 transition duration-300">
                        Join the Culineer Community
                    </button>
                </div>
            </div>
        </div>
    );
}
