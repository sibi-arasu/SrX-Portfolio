import styles from "../style";
const Testimonials = () => (
  <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="sm: w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
      <h2 className={styles.heading2}>
        About Me!
        <p className={`${styles.paragraph} `}>
         while(Me Myself and I) printf("Bio");         
        </p>
      </h2>
      
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <p className="text-white">Name: SIBIARASU <br/>Education: Computer Science Engineer<br/>Year: Pre-Final<br/>Area of Interest: Web Developing, Problem Solving.<br/>
      <br/>I would love to work with great companies and to engage in great projects <br/>that will change the future of web development. I started my coding skills at college, <br/>later it became my passion to work with! 
      </p>
    </div>
    <div className="mr-250">
        <h1 className={`${styles.heading2} text-gradient `}><br/>Contact<br/> </h1>
        <h1 className="text-white">Let's Talk About Coding!<br/>Reach Me Here</h1>
        <div className="text-dimWhite"><a href="mailto:sibiarasud@gmail.com">sibiarasud@gmail.com</a></div>
            {/* gradient end */}
      </div>
  </section>
);

export default Testimonials;
