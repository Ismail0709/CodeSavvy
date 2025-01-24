"use client";
import React, { useState } from "react";
import Image from "next/image";
import producerImage from "../../public/producer.svg";
import farmerImage from "../../public/farmer.svg";
import homeCookImage from "../../public/homecook.svg";
import companyImage from "../../public/company.png"; // Replace with your actual image path

const TabContent = ({ imageSrc }) => (
  <div
    className="flex justify-center items-center bg-[#85C349] rounded-2xl w-full max-w-3xl h-80 md:h-96"
  >
    <Image
      src={imageSrc}
      alt="Tab Image"
      className="object-contain h-full w-full"
    />
  </div>
);

const Section = () => {
  const [activeTab, setActiveTab] = useState("Producer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderImage = () => {
    switch (activeTab) {
      case "Producer":
        return <TabContent imageSrc={producerImage} />;
      case "Farmer":
        return <TabContent imageSrc={farmerImage} />;
      case "Home Cook":
        return <TabContent imageSrc={homeCookImage} />;
      default:
        return <TabContent imageSrc={producerImage} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Company Image */}
      <div className="w-full mb-8">
        <Image
          src={companyImage}
          alt="Company Logo"
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center max-w-3xl mb-4">
        <span className="text-[#85C349]">Connecting Farmers</span> and Home Cooks for a Thriving Food{" "}
        <span className="text-[#85C349]">Community!</span>
      </h1>
      <p className="text-gray-500 text-center max-w-3xl mb-8">
        A platform that connects farmers, producers, and home cooks to promote
        local, sustainable food.
      </p>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        {["Producer", "Farmer", "Home Cook"].map((tab) => (
          <div
            key={tab}
            className="relative cursor-pointer py-2"
            onClick={() => handleTabClick(tab)}
          >
            <span
              className={`px-4 md:px-6 py-2 text-lg font-semibold ${
                activeTab === tab ? "text-[#85C349]" : "text-gray-500"
              } hover:text-[#85C349] transition-colors duration-300`}
            >
              {tab}
            </span>
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9acf65] transition-all duration-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full flex justify-center">{renderImage()}</div>
    </div>
  );
};

export default Section;
