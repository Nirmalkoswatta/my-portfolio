import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, 30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    animate2: {
      scale: [1, 1.4, 1],
      x: [0, -60, 0],
      y: [0, 40, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    animate3: {
      scale: [1, 1.5, 1],
      x: [0, 30, 0],
      y: [0, -50, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
  };

  return (
    <div className='fixed inset-0 overflow-hidden -z-10 pointer-events-none'>
      <div className='absolute inset-0 bg-[#0a0c10]' />
      <div className='absolute inset-0 flex justify-center items-center filter blur-[120px] opacity-20'>
        <motion.div 
          className='bg-blue-600 w-[500px] h-[500px] rounded-full absolute top-[-10%] left-[-10%]' 
          variants={circleVariants} 
          animate="animate1" 
        />
        <motion.div 
          className='bg-indigo-700 w-[600px] h-[600px] rounded-full absolute bottom-[-20%] right-[-10%]' 
          variants={circleVariants} 
          animate="animate2" 
        />
        <motion.div 
          className='bg-purple-800 w-[400px] h-[400px] rounded-full absolute top-[30%] right-[20%]' 
          variants={circleVariants} 
          animate="animate3" 
        />
      </div>
      <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 mix-blend-soft-light' />
    </div>
  );
};

export default Background;
