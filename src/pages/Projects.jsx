import React from 'react';
import { PROJECTS } from '../constants/data';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id='Projects'>
      <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
        <div>
          <h2 className='text-white mb-2'>Featured Projects</h2>
          <div className='h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full' />
        </div>
        <p className='text-stone-500 text-lg hidden md:block'>Selected Work</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className='group glass rounded-3xl overflow-hidden'
          >
            <div className='relative h-64 overflow-hidden'>
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300' />
              <div className='absolute top-6 right-6 flex space-x-3'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 glass rounded-full text-white hover:bg-white hover:text-black transition-all'
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>

            <div className='p-8'>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors'>
                {project.name}
              </h3>
              <p className='text-stone-400 mb-6 leading-relaxed'>
                {project.description}
              </p>
              
              <div className='flex flex-wrap gap-2 mb-8'>
                {project.languages.split(',').map((lang, i) => (
                  <span key={i} className='text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-stone-300 border border-white/5'>
                    {lang.trim()}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between pt-6 border-t border-white/10'>
                <span className='text-xs font-semibold text-stone-500'>
                  Tools: <span className='text-stone-400'>{project.tools}</span>
                </span>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors'
                >
                  View Case Study <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
