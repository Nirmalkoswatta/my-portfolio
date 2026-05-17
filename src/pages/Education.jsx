import React from 'react';
import { EDUCATION } from '../constants/data';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id='Education'>
      <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
        <div>
          <h2 className='text-white mb-2'>Education</h2>
          <div className='h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full' />
        </div>
        <p className='text-stone-500 text-lg hidden md:block'>Academic Background</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='glass group rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300'
          >
            <div className='flex flex-col h-full text-center'>
              <div className='flex flex-col items-center mb-6'>
                {edu.image && (
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={edu.image} 
                    alt={edu.school} 
                    className='w-full max-h-80 object-contain rounded-2xl bg-white/5 p-4 mb-6 border border-white/10 shadow-2xl'
                  />
                )}
                <span className='px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold'>
                  {edu.year}
                </span>
              </div>
              <h3 className='text-white text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors'>
                {edu.level}
              </h3>
              <p className='text-stone-400 text-lg font-medium'>
                {edu.school}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
