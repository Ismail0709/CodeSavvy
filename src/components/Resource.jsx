"use client";
import React, { useState } from "react";
import Image from "next/image";
import resource1 from "../../public/resource1.png";
import resource2 from "../../public/resource2.png";
import resource3 from "../../public/resource3.png";
import resource4 from "../../public/resource4.png";
import resource5 from "../../public/resource2.png";

const news = [
  {
    id: 1,
    image: resource1,
    date: "December 6, 2021 Delia Hernandez",
    title: "Muddassar MD Collection Emerges As A Favorite Among Designers",
  },
  {
    id: 2,
    image: resource2,
    date: "December 6, 2021 Delia Hernandez",
    title: "Muddassar MD Collection Emerges As A Favorite Among Designers",
  },
  {
    id: 3,
    image: resource3,
    date: "December 6, 2021 Delia Hernandez",
    title: "Muddassar MD Collection Emerges As A Favorite Among Designers",
  },
  {
    id: 4,
    image: resource4,
    date: "December 6, 2021 Delia Hernandez",
    title: "Muddassar MD Collection Emerges As A Favorite Among Designers",
  },
  {
    id: 5,
    image: resource5,
    date: "December 6, 2021 Delia Hernandez",
    title: "Muddassar MD Collection Emerges As A Favorite Among Designers",
  },
];

const Resources = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const getVisibleNews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % news.length;
      visible.push(news[index]);
    }
    return visible;
  };

  return (
    <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Heading */}
      <h1 className="text-left text-2xl md:text-3xl font-semibold mb-4 md:mb-6 pt-8 md:pt-12">
        Resources & <span className="text-[#85C349]">Education</span>
      </h1>
      <p className="text-left text-gray-500 mb-6 md:mb-10 text-sm md:text-base">
        Learn More About Local Recipes, ingredient guides, certifications.
      </p>

      {/* News Carousel */}
      <div className="relative flex items-center">
        {/* Backward Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-[#85C349] text-white p-2 rounded-full hover:bg-blue-600 transition transform -translate-x-2"
        >
          &#8592;
        </button>

        {/* News Cards */}
        <div className="flex space-x-4 overflow-hidden w-full flex-wrap justify-center sm:justify-start">
          {getVisibleNews().map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-[95%] sm:w-[45%] md:w-1/3 lg:w-1/4 mx-2"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={`News: ${item.title}`}
                className="w-full h-44 object-cover"
              />
              {/* Date */}
              <div className="text-left text-gray-500 text-xs mt-2 px-4">
                {item.date}
              </div>
              {/* Title */}
              <h4 className="text-left text-gray-800 font-semibold text-sm mt-2 px-4 mb-4">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Forward Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-[#85C349] text-white p-2 rounded-full hover:bg-blue-600 transition transform translate-x-2"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Resources;
