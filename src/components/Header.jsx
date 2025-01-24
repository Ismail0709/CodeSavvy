"use client";
import React from 'react'
import Image from 'next/image';
import logo from '../../public/logo.png'
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    
  return (
    <header>
        <div className='flex flex-row justify-around my-5'>
            <div className=''>
                <Image src={logo} alt='logo' className='h-[45px] w-[134px]'/>
            </div>

            <nav className='flex w-[800px] justify-center space-x-8 p-4 rounded-lg'>
                <a href="/">Home</a>
                <a href="#">Farmers Market</a>
                <a href="#">Producers</a>
                <a href="#">Home Cooks</a>
                <a href="#">Directory</a>
            </nav>

            <div className='flex justify-center my-2 p-1 w-28 rounded-full border-2 border-gray-500 flex items-center space-x-2'>
                <button className='flex items-center font-semibold'>
                    Sign up
                </button>
                <IoIosArrowDown className='transform translate-y-1'/>
            </div>


        </div>
    </header>
  )
}

export default Header
