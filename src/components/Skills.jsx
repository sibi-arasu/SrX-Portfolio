import styles, { layout } from "../style";
import { skls} from "../assets";




const Skills = () =>  (
  <section id="skills" className={layout.section}>
    
    <div ><div>
    <h2 className={`${styles.heading2} max-w-[70px] mt-1`}> 
    <span className="text-white" >SKILLS</span>{" "}
       
    </h2>
    <p className="text-dimWhite"> I've Learnt these Technologies which are rotating
    here.<br/> Learning is extremely important for each individual on earth. <br/>
    It has no bar on time or age restriction; all required is a passion for lifelong Learning.<br/>
     And life-long learning is the key to success. 
      <br/>Lifelong Learning continues on an informal basis, usually after graduation. <br/> 
      It promotes social inclusion, active citizenship, personal growth, self-sufficiency,  <br/>competitiveness and
       employability.”</p><p className="text-white">Strength: <ul className="list"><li>C</li>
      <li>C++</li>
      <li>HTML</li><li>CSS</li><li>JavaScript</li><li>ReactJS</li></ul></p><h3 className="text-gradient">I'm still Learnin' cause I've a long way to go..!</h3>
      </div>
       
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div>
     <div className="sm:justify-content:center" ><img src={skls} alt="skills" className=" rotate w-[70%] h-[100%] " /></div>
        <div className="absolute z-[0] w-[200%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[10%] h-[10%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[80%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

  </section>
   
);

export default Skills;
