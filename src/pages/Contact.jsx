import React from 'react';
import { CONTACT } from '../constants/data';
import { motion } from 'framer-motion';
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id='ContactMe' className='pb-32'>
      <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
        <div>
          <h2 className='text-white mb-2'>Get In Touch</h2>
          <div className='h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full' />
        </div>
        <p className='text-stone-500 text-lg hidden md:block'>Let's Connect</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='space-y-10'
        >
          <h3 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            Have a project in mind? <br />
            <span className='text-gradient'>Let's talk about it.</span>
          </h3>
          
          <p className='text-stone-400 text-lg leading-relaxed max-w-md'>
            {CONTACT.description}
          </p>

          <div className='space-y-6'>
            <div className='flex items-center gap-6 group'>
              <div className='p-4 glass rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all'>
                <FiPhone size={24} />
              </div>
              <div>
                <p className='text-stone-500 text-sm font-medium'>Phone</p>
                <p className='text-white font-bold'>{CONTACT.number}</p>
              </div>
            </div>

            <div className='flex items-center gap-6 group'>
              <div className='p-4 glass rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all'>
                <FiMail size={24} />
              </div>
              <div>
                <p className='text-stone-500 text-sm font-medium'>Email</p>
                <p className='text-white font-bold'>{CONTACT.email}</p>
              </div>
            </div>

            <div className='flex items-center gap-6 group'>
              <div className='p-4 glass rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all'>
                <FiMapPin size={24} />
              </div>
              <div>
                <p className='text-stone-500 text-sm font-medium'>Location</p>
                <p className='text-white font-bold'>{CONTACT.address}</p>
              </div>
            </div>
          </div>

          <div className='flex gap-4'>
            {CONTACT.socialLinks.map((link, index) => {
              const Icon = link.icon === "FaSquareGithub" ? FaSquareGithub : FaLinkedin;
              return (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-4 glass rounded-2xl text-stone-400 hover:text-white transition-all'
                  aria-label={link.ariaLabel}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='glass rounded-3xl p-8 md:p-10'
        >
          <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-stone-400 ml-1'>Name</label>
                <input type='text' className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-blue-500/50 outline-none transition-all' placeholder='John Doe' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-stone-400 ml-1'>Email</label>
                <input type='email' className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-blue-500/50 outline-none transition-all' placeholder='john@example.com' />
              </div>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-stone-400 ml-1'>Subject</label>
              <input type='text' className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-blue-500/50 outline-none transition-all' placeholder='How can I help?' />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-stone-400 ml-1'>Message</label>
              <textarea rows={4} className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-blue-500/50 outline-none transition-all resize-none' placeholder='Your message...' />
            </div>
            <button className='w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2'>
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>
      </div>

      <footer className='mt-32 pt-8 border-t border-white/5 text-center'>
        <p className='text-stone-500 text-sm'>
          {CONTACT.footerText}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
