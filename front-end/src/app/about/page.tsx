'use client';

import SectionHeader from '@/components/section-header';
import {motion} from 'framer-motion';
import {fadeIn} from '@/utils/motion';
import {sectionsConfig} from '@/config/section';
import Tilt from 'react-parallax-tilt';
import {SiJavascript} from 'react-icons/si';
import {FaJava, FaReact, FaWindows} from 'react-icons/fa';
import '@/styles/tilt.css';
interface IntroductionCardProps {
  index: number;
  title: string;
  icon: React.ReactNode;
}

interface IntroductionCardType {
  title: string;
  icon: React.ReactNode;
}

const services: IntroductionCardType[] = [
  {
    title: 'Frontend Developer',
    icon: <SiJavascript className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Backend Developer',
    icon: <FaJava className='h-10 w-10 text-primary' />,
  },
  {
    title: 'React Native Developer',
    icon: <FaReact className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Windows Application Developer',
    icon: <FaWindows className='h-10 w-10 text-primary' />,
  },
];

const skillsList: {title: string; content: string}[] = [
  {
    title: 'Front-end',
    content:
      'JavaScript, TypeScript, HTML/CSS, React, Redux, Next.js, Vue, XAML',
  },
  {
    title: 'Back-end',
    content: 'Java, C#, Spring, Node.js, express.js',
  },
  {
    title: 'Database',
    content: 'Oracle, MySQL, Redis, PostgreSQL',
  },
  {
    title: 'Application',
    content: 'React Native',
  },
  {
    title: 'Server',
    content: 'nginx, Apache, Tomcat, JEUS',
  },
  {
    title: 'etc',
    content: 'Git, GitHub Actions, Docker, Jenkins, Swagger',
  },
];

function IntroductionCard({index, title, icon}: IntroductionCardProps) {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor='#A4ADB4'
      glareBorderRadius='20px'
      glarePosition='all'
      className='parallax-effect-glare-scale'
    >
      <motion.div
        initial='offScreen'
        whileInView='onScreen'
        variants={fadeIn('right', 'spring', index * 0.5, 1.75)}
        className='parallax-effect-glare-scale w-[15vw] rounded-[20px] bg-card outline outline-1 outline-primary '
      >
        <div className='inner-element flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5'>
          {icon}
          <h3 className='text-center text-sm font-bold text-secondary xl:text-xl'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default function About() {
  return (
    <section>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.about} />

      <motion.div
        initial='offScreen'
        whileInView='onScreen'
        variants={fadeIn('', '', 0.5, 1)}
        className='mt-4 max-w-6xl text-base leading-[30px] text-secondary lg:text-lg'
      >
        {sectionsConfig.sections.about.content}
        <div className='my-8 text-base text-secondary lg:text-lg'>
          {skillsList.map((skill, index) => (
            <p key={index} className='mb-2'>
              <span className='font-bold'>{skill.title}</span>: {skill.content}
            </p>
          ))}
        </div>
      </motion.div>

      <div className='mt-14 flex flex-wrap gap-14 max-sm:justify-center'>
        {services.map((service, index) => (
          <IntroductionCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}
