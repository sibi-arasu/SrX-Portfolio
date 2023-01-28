import { robot, github} from "../assets";
import styles, { layout } from "../style";

const  Project1= () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Demo Project!
      </h2>
      <h1 className="text-white"> Bank UI</h1>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        This project is Done by ReactJS to get more stable in  it!<br/>
        Basically it is a custom UI for Banking System Which Suggests to do an Online Transaction Than Cash Transaction.
        
       </p>
       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       <a href="https://github.com/sibi-arasu/Bank_UI" target="_blank" rel="noopener noreferrer"><img src={github} alt="git" className="w-[128.86px] h-[38.05px] " /></a>
        <a href="https://github.com/sibi-arasu/Bank_UI" target="_blank" rel="noopener noreferrer" className="text-gradient text-dimWhite" >Check Out</a>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={robot} alt="BankUI" className="w-[70%] h-[100%] bottom" />
    </div>
  </section>
);

export default Project1;
