'use client';

import SectionHeader from '@/components/section-header';
import {motion} from 'framer-motion';
import {fadeIn} from '@/utils/motion';
import {sectionsConfig} from '@/config/section';
import Tilt from 'react-parallax-tilt';
import {FcPhoneAndroid, FcAlarmClock} from 'react-icons/fc';
import {SiJavascript} from 'react-icons/si';
import {FaJava, FaReact, FaWindows} from 'react-icons/fa';
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

function IntroductionCard({index, title, icon}: IntroductionCardProps) {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor='#A4ADB4'
      glareBorderRadius='20px'
    >
      <div className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className='w-[15vw] rounded-[20px] outline outline-1 outline-primary'
        >
          <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5'>
            {icon}
            <h3 className='text-center text-sm font-bold text-secondary xl:text-xl'>
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
}

export default function About() {
  return (
    <section>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.5, 1)}
        className='mt-4 max-w-6xl text-[17px] leading-[30px] text-secondary'
      >
        {sectionsConfig.sections.about.content}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 max-sm:justify-center'>
        {services.map((service, index) => (
          <IntroductionCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}
