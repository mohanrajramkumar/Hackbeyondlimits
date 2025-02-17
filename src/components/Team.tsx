import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import teamImage from '../images/PXL_20230817_173841991.PORTRAIT.jpeg';
import sarahImage from '../images/ansarcroped.jpeg';
import michaelImage from '../images/IMG_7500.jpeg';
import emilyImage from '../images/PHOTO-2025-01-06-12-48-23.jpg';

const teamMembers = [
  {
    name: 'Lakshan G',
    role: 'Lead Organizer',
    image: teamImage,
    social: {
      twitter: '#',
      linkedin: '#', 
      github: '#'
    }
  },
  {
    name: 'Ansar Hussain', 
    role: 'Technical Director',
    image: sarahImage,
    social: {
      instagram: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Pareekshith',
    role: 'Web3 Expert', 
    image: michaelImage,
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Irfan',
    role: 'Community Manager',
    image: emilyImage,
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export const Team = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="team">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team - Tech Hub</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind HACK_BEYOND_LIMITS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/60 rounded-xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};