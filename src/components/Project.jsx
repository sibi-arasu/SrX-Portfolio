import { github,OP1 } from "../assets";
import styles, { layout } from "../style";

const Project = () => (
  <section id="projects" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={OP1} alt="CipheR" className="w-[950px] h-[70%] img " />
      <div ><p className="text-gradient"></p></div>v
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} `}>
      <div className={layout.section}><h1 className={`${styles.heading2}  max-w-[70px] mt-1`}>Projects</h1></div>
      <h2 className={styles.heading2}>
        File Encryptor
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Encrypts a file with a key privately,<br/> so that we send it securely!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-4">
       <a href="https://github.com/sibi-arasu/VideoEncryption" target="_blank" rel="noopener noreferrer"><img src={github} alt="git" className="w-[128.86px] h-[45.05px] " /></a>
        <a href="https://github.com/sibi-arasu/VideoEncryption" target="_blank" rel="noopener noreferrer" className="text-gradient text-dimWhite" >Check Out</a>

      </div>
    </div>
    
  </section>
);

export default Project;
