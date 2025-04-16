import { Tilt } from "react-tilt";
import  { motion } from 'framer-motion'
import {github} from '../assets'
import { SectionWrapper } from '../hoc'
import {styles } from '../style'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image}) => {
  return (
      <motion.div variants={fadeIn("up","spring",0.5 * index, 0.75)}>
        <Tilt options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
        </div>
        <div className='mt-5'>
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondry text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
      </motion.div>
  )

}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-black-200 text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and through real-world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />

        ))}
         
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")