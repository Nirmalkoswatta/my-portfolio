import React from 'react';
import { PROFILE } from '../constants/data';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section id='Profile' className='min-h-screen flex items-center pt-32 pb-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='relative order-1 lg:order-2 flex justify-center'
        >
          <div className='absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full' />
          <div className='relative w-full max-w-md aspect-square overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl'>
            <img
              src={PROFILE.image}
              alt={PROFILE.name}
              className='w-full h-full object-cover transition-all duration-700'
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='order-2 lg:order-1 text-center lg:text-left'
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6'
          >
            UI/UX Engineer & IT Undergraduate
          </motion.span>
          
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tighter'>
            <span className='text-white'>I'm </span>
            <span className='text-gradient'>{PROFILE.name}</span>
          </h1>

          <p className='text-stone-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0'>
            {PROFILE.introduction}
          </p>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PROFILE.resumeLink}
              download="Senara jayawardena CV (1).pdf"
              target='_blank'
              rel="noopener noreferrer"
              className='px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-stone-200 transition-colors shadow-xl'
            >
              {PROFILE.resumeLinkText}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#ContactMe'
              className='px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors'
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
