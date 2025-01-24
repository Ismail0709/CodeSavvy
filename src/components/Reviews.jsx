"use client";
import React, { useState } from "react";
import Image from "next/image";
import review1 from "../../public/review1.png";
import review2 from "../../public/review2.png";
import review3 from "../../public/review3.png";
import review4 from "../../public/review4.png";
import review5 from "../../public/review5.png";
import avatar1 from "../../public/avatar1.png";
import avatar2 from "../../public/avatar2.png";
import avatar3 from "../../public/avatar3.png";
import avatar4 from "../../public/avatar4.png";
import avatar5 from "../../public/avatar5.png";

const reviews = [
  {
    id: 1,
    image: review1,
    description: "When we put recipes out there on the app for people to easily access...I was selling out of my cooler of ground...",
    author: "Liz Riffle",
    avatar: avatar1,
  },
  {
    id: 2,
    image: review2,
    description: "I knew I was losing people... I look at Culineer, and now I'm the solution.",
    author: "Jerrica Lockwood",
    avatar: avatar2,
  },
  {
    id: 3,
    image: review3,
    description: "I love supporting local farmers while enjoying fresh produce!",
    author: "Cheryl Bailey",
    avatar: avatar3,
  },
  {
    id: 4,
    image: review4,
    description: "I love learning about the way food is grown so I can make better decisions for my health.",
    author: "Marina Key",
    avatar: avatar4,
  },
  {
    id: 5,
    image: review5,
    description: "I like the simplicity of the app. I can send the link to friends or family. My Instagram is a cookbook...",
    author: "Jeremy Johnson",
    avatar: avatar5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <div className="h-auto bg-[#F3F9ED] max-w-full mx-auto py-12">
      <h1 className="text-center text-3xl font-semibold mb-6">
        See what our{" "}
        <span className="text-[#85C349]">Clients Said</span> about us
      </h1>
      <p className="text-center mb-10 text-gray-500">Explore the best reviews we got from our clients.</p>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-[#85C349] text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          &#8592;
        </button>

        {/* Reviews */}
        <div className="flex space-x-4 overflow-hidden w-full justify-center">
          {getVisibleReviews().map((review) => (
            <div
              key={review.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/5 max-h-[400px]"
            >
              <Image
                src={review.image}
                alt={`Review by ${review.author}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-center text-gray-700 text-sm mb-4 font-semibold">
                  {review.description}
                </p>
              </div>
              <div className="flex items-center justify-start p-4 border-t w-full">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h4 className="font-semibold text-gray-800">{review.author}</h4>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-[#85C349] text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
