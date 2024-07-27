import Link from "next/link"
import Image from 'next/image';
import { Timeline } from "../details";
import portfolio from "../../public/home/portfolio.png";
import backdrop from "../../public/home/background.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const SocialButtons = () => {
  return (
    <div className="social-buttons">
         <a href="tel:+16314315073">
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
      <a href="mailto:mnandakumar@protonmail.com" target="_top">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/manoj-nandakumar" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/manojn22" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
     
      
    </div>
  );
};


export const AboutMe = ()=>{
    return <div className="my_portfolio flex items-center">
        <div className="flex flex-col lg:flex-row ">
          
          <div className="flex-1"
          style={{
            backgroundImage: `url(${backdrop.src})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 130%'
          }}>
 
          
          <Image 
           
      src={portfolio}
      width={500}
      height={500}
      alt="Picture of the author"
    />

          </div>
          <div className="text-white pl-2 flex-1 flex-grow flex-col flex items-end justify-center gap-2">
            <div className="container  text-3xl">
            I'm Manoj Nandakumar, Software Engineer with Masters in Computer Science from Stony Brook University and Pet Lover.
            
            </div>
            <SocialButtons/>
          </div>
           
        </div>
    </div>
}

export const HorizontalTimeline = () => {
  return (
    <div>
      <h1 className="flex items-center  text-2xl text-white font-bold mb-8">About me <Link href='/About-me' className="ml-4 flex items-center justify-center w-7 h-7">
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </Link></h1>

          <div className="timeline flex">
      
        
      {Timeline.map((event, index) => (
        <div key={index} className="timelineEvent flex-grow">
          <div className="circle bg-white"></div>
          <div className="timelineContent text-white">
            <h3>{event.date}</h3>
            <p>{event.description}</p>
          </div>
          <div className="line bg-white"></div>
        
        </div>
      ))}
    </div>
    </div>
    
  );
}


