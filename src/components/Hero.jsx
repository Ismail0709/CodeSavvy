"use client";
import React from 'react'

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="relative w-full max-w-6xl p-6">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-6 gap-4">
              <div className="col-span-1 row-span-1 flex items-center justify-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Producer"
                  className="rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <span className="absolute top-12 text-sm bg-white px-2 py-1 rounded-lg shadow-md">Producer</span>
              </div>
              <div className="col-span-1 row-span-2 flex items-center justify-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Home Cook"
                  className="rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <span className="absolute top-12 text-sm bg-white px-2 py-1 rounded-lg shadow-md">Home Cook</span>
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Market"
                  className="rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <span className="absolute top-12 text-sm bg-white px-2 py-1 rounded-lg shadow-md">Market</span>
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Producer"
                  className="rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <span className="absolute top-12 text-sm bg-white px-2 py-1 rounded-lg shadow-md">Producer</span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">
                Discover and <span className="text-green-500">Support</span> Your <span className="text-green-500">Local Food Heroes</span>
              </h1>
              <p className="mt-4 text-gray-600">
                Connecting consumers with local food producers for a healthier, sustainable future.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md">
                  Join as a Consumer
                </button>
                <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md">
                  Upgrade Your Business
                </button>
              </div>
              <div className="mt-8 flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">200+</p>
                  <p className="text-gray-600">Total Producers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">199+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="mt-12 relative">
              <img
                src="https://placehold.co/600x300"
                alt="Dashboard preview"
                className="w-full rounded-lg shadow-lg"
                width="600"
                height="300"
              />
              <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center space-x-2">
                <img
                  src="https://placehold.co/50x50"
                  alt="Mountain Mushroom Growers"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold">Mountain Mushroom Growers</p>
                  <p className="text-xs text-gray-600">Artisanal mushrooms</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 mb-4 mr-4 flex items-center space-x-2">
                <img
                  src="https://placehold.co/50x50"
                  alt="Bok Choy"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                  width="50"
                  height="50"
                />
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold">Bok Choy</p>
                  <p className="text-xs text-gray-600">267 results found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Hero
