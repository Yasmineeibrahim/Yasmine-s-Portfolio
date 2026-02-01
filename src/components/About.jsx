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
    Hi! I’m Yasmine, a Computer Engineer and Front-End / Mobile Developer who loves building clean, intuitive, and visually engaging digital experiences. I specialize in turning ideas into polished web and Android applications that are both functional and enjoyable to use.

I’ve worked on a wide range of projects, from full-stack employee management systems and risk management platforms to AI-powered Android apps like an OCR-based note-taking app and a habit tracking application built with Jetpack Compose. My experience spans React.js, Kotlin, Jetpack Compose, REST APIs, Firebase, SQL/NoSQL databases, and secure authentication systems.

What drives me most is crafting seamless user experiences—whether that’s designing smooth UI flows, optimizing performance, or building scalable architectures behind the scenes. I enjoy tackling complex problems, learning new technologies, and collaborating on projects that push creativity and innovation forward.
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