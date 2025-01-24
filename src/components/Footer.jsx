"use client";
import React from 'react'
import Image from 'next/image';
import logo from '../../public/logo.png'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer>
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
    
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
                <SocialIcon 
                url='https://www.facebook.com'
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon 
                url='https://www.youtube.com'
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon 
                url='https://www.instagram.com'
                fgColor='gray'
                bgColor='transparent'
                />
            </motion.div>
    
    
        </div>
        <hr className="my-4 border-gray-400 w-[95%] mx-auto my-6" />

        <div className='flex flex-row justify-between px-8 py-6'>
            <p>© 2024 Culineer. All rights reserved.</p>
            <div className='flex flex-row justify-end'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
