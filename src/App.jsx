import styles from "./style";
import { Project, Skills,  Footer, Navbar,  Testimonials, Hero, Project1 } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills />
       <Project />
        <Project1 />
       <Testimonials />
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App;
