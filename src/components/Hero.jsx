import { motion } from 'framer-motion';
import { styles } from '../style';
import  { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.padding} absolute inset-0 top-[120px] sm:top-[80px] md:top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#100E0F]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black-100`}>
            Hi, I&apos;m <span className="text-[#e4c258]" style={{ fontFamily:"Meddon", fontWeight:"bold"}}>Yasmine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            A passionate full stack android & <br className='sm:block hidden'/> web applications developer.
            </p>
        </div>
        </div>  
        <ComputersCanvas/>
        
        <div className='absolute top-[700px] xs:bottom-10 bottom-12 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
