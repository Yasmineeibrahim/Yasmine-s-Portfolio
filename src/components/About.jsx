import React from 'react'
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../style'
import { services } from '../constants'
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spriing",0.5 * index, 0.75)} className="w-full yellow-white-gradient rounded-[20px] p-[1px] shadow-card">
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-[#505645] text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Overview</p>
      <h2 className={styles.sectionHeadText} >About Me</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-black-200 text-[17px] max-w-5xl leading-[30px]">
    Hey! I’m Yasmine, a front-end developer with a passion for building web and Android apps that are both functional and visually appealing. I also specialize in UI/UX design, ensuring every project delivers a smooth and intuitive user experience.

I’ve worked on a variety of projects, including a hotel website, a gold bidding platform, a NewsPulse app, and a habit tracker. Whether it’s a website or a mobile app, I love turning ideas into polished, user-friendly products. With expertise in all aspects of front-end development, I focus on writing clean code and creating seamless digital experiences.

Always up for a challenge, I’m excited to collaborate and bring fresh ideas to life.
    </motion.p>

    <div className="flex flex-wrap gap-10 mt-20">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")