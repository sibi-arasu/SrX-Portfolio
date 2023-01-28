import styles from "../style";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { robot,skls,avatar } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div>
         
        </div>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi! I'm <br className="sm:block hidden" />{" "}
            <span className="text-gradient" >SIBIARASU D</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          WEB DEVELOPER.
        </h1>
        <h2 className={`${styles.paragraph} max-w-[470px] mt-5`}>
          UI/UX DESIGNER.        
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            
            <Typewriter options={{strings: ['Passionate about Coding and Designing!!'],  autoStart: true, loop: true,  delay: 75   }}/>
        </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <motion.div animate={{ scale: [1, 1, 1, 1, 1], rotate: [0, 0, 27, 27, 0],borderRadius: ["20%", "20%", "50%", "20%", "20%"], }}>
        <img src={avatar} alt="avatar" className="w-[80%] h-[130%] relative z-[5]" />
      </motion.div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[10%] h-[10%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      
    </section>
  );
};

export default Hero;
