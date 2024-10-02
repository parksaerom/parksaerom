'use client';

import {fadeIn, TMotion} from '@/utils/motion';
import {motion} from 'framer-motion';
import {experienceArray} from './experience-flow';
import {ArrayLength, NumberRange} from '@/types';
import {MotionP} from '@/components/motion';

type ExperienceTextSize = 'xl' | '2xl' | '4xl';
type ExperienceArrayRange = NumberRange<ArrayLength<typeof experienceArray>>;

interface ExperienceTextProps {
  className?: string;
}

interface MotionExperienceTextProps
  extends Partial<TMotion>,
    React.HTMLAttributes<HTMLDivElement> {
  fontSize?: ExperienceTextSize;
  experienceIndex?: ExperienceArrayRange;
}

function getPositionY(index: number): number | undefined {
  const node = experienceArray.find((exp) => exp.data.index === index);
  return node?.position.y;
}

function MotionExperienceText({
  direction = 'right',
  type = 'spring',
  delay = 0.4,
  duration = 1.75,
  fontSize = '2xl',
  experienceIndex = undefined,
  className,
  children,
}: MotionExperienceTextProps) {
  const textSize =
    fontSize === 'xl'
      ? 'text-sm xl:text-xl'
      : fontSize === '2xl'
      ? 'text-base xl:text-2xl'
      : fontSize === '4xl'
      ? 'text-xl xl:text-4xl'
      : '';
  const y = experienceIndex ? getPositionY(experienceIndex) : experienceIndex;
  return (
    <MotionP
      initial='offScreen'
      whileInView='onScreen'
      variants={fadeIn(direction, type, delay, duration)}
      style={{top: `${y}px`}}
      className={`absolute ${textSize} ${className ? className : ''}`}
    >
      {children}
    </MotionP>
  );
}

export default function ExperienceText({className = ''}: ExperienceTextProps) {
  return (
    <div
      className={`mr-10 content-end text-center font-extralight leading-tight text-secondary ${className}`}
    >
      <MotionExperienceText experienceIndex={0} className='ml-56 mt-48'>
        저는 자바 개발자로
        <br />
        시작했습니다.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={2} className='-mt-40'>
        혼자 백팩을 메고
        <br />
        서울시청, 수자원공사, 기상청에 반영을 하러 다니면서
        <br />
        진땀도 많이 흘렸지만,
        <br />
        단시간에 많은 걸 배웠어요.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={3}>
        연구 개발 사업에 평소에 눈여겨보던
        <br /> React Native를 제안하여
        <br />
        모바일 애플리케이션을 개발하기도 했습니다.
      </MotionExperienceText>
      <MotionExperienceText
        experienceIndex={3}
        delay={0.6}
        fontSize='xl'
        className='ml-56 mt-36'
      >
        이때부터 새로운 언어에도
        <br />
        관심이 많이 생긴 것 같아요.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={5} className='-mt-24 ml-3'>
        그러던 와중에, 인터넷 환경이 되지 않는 공장에서
        <br />
        사용하기 위한 윈도우 어플리케이션 프로젝트를
        <br />
        맡게 되었습니다.
      </MotionExperienceText>
      <MotionExperienceText
        experienceIndex={5}
        delay={0.6}
        className='ml-28 mt-8'
      >
        매주 자문 교수님께 통계 수업을 들으며 <br />
        로직을 개발해가고,
        <br />
        공장들을 발로 뛰며 기획, 운영한 만큼 <br />
        가장 뿌듯한 프로젝트였습니다.
      </MotionExperienceText>
      <MotionExperienceText
        experienceIndex={5}
        fontSize='xl'
        delay={0.7}
        className='ml-10 mt-52'
      >
        동시에 3~4개의 프로젝트를 진행하느라
        <br />
        일주일 동안 10시간도 못 자기도 했지만
        <br />
        가장 기억에 남는 시기이기도 해요.
      </MotionExperienceText>
      <MotionExperienceText
        experienceIndex={6}
        fontSize='xl'
        className='-mt-32'
      >
        하지만 어느 날, <br />
        Visual Studio 켜서 C#으로 윈도우 어플리케이션 개발하다가,
        <br />
        VSCode 켜서 JavaScript로 앱 개발하고, <br />
        이번엔 IntelliJ 켜서 Java로 웹 개발을 하고 있는 저를 보면서 <br />
        문득 '내가 너무 이것저것 깊이 없이 하고 있는 것 아닐까?' <br />
        하는 생각이 들었어요.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={6} fontSize='xl' className='mt-52'>
        매년 개발부 연봉 인상률 1위를 할 정도로
        <br />
        인정을 많이 해주셨고, 예뻐해 주셨어서
        <br />
        고민을 정말 많이 했지만
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={6} className='ml-16 mt-96'>
        좀 더 웹 개발에 집중하고 싶다는 생각이 들어
        <br />
        저는 <strong className='text-3xl font-semibold'>퇴사</strong>를 결심하게
        되었습니다.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={7} className='-mt-36'>
        감사하게 퇴사를 한 뒤에도,
        <br />
        제가 담당하던 프로젝트를 마무리할 수 있게
        <br />
        기회를 주셨어요.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={7} className='ml-28 mt-10'>
        자연스럽게 이때부터, 프리랜서로
        <br />
        일을 하게 되었습니다.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={8} className='mt-28'>
        이전에 일을 도운 인연으로 <br />
        스타트업을 잠시 돕게 되었어요.
      </MotionExperienceText>
      <MotionExperienceText experienceIndex={8} fontSize='xl' className='mt-64'>
        웹 개발 쪽에 신입 프론트엔드 개발자 한 명 밖에 없던 상황이어서
        <br />
        기반을 다지는데 많이 신경 썼습니다.
      </MotionExperienceText>
      <MotionExperienceText
        experienceIndex={8}
        fontSize='xl'
        className='ml-44 mt-96'
      >
        로봇이라는 새로운 직군에서
        <br />
        일을 하는 것도 참 재밌었어요.
      </MotionExperienceText>
    </div>
  );
}
