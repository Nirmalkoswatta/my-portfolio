import React from 'react';
import { SKILLS } from '../constants/data';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as TbIcons from 'react-icons/tb';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as DiIcons from 'react-icons/di';

const Skills = () => {
  const getIcon = (iconName) => {
    const icon = 
      FaIcons[iconName] || 
      Fa6Icons[iconName] || 
      TbIcons[iconName] || 
      SiIcons[iconName] || 
      RiIcons[iconName] || 
      DiIcons[iconName];
    return icon ? React.createElement(icon, { size: 40 }) : null;
  };

  return (
    <section id='Skills'>
      <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
        <div>
          <h2 className='text-white mb-2'>Technical Expertise</h2>
          <div className='h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full' />
        </div>
        <p className='text-stone-500 text-lg hidden md:block'>Skills & Tools</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className='glass rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all'
          >
            <div className={`mb-4 ${skill.color} transition-transform group-hover:scale-110`}>
              {getIcon(skill.icon)}
            </div>
            <span className='text-stone-300 font-medium text-sm'>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
