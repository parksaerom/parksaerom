'use client';

import SectionHeader from '@/components/section-header';
import {sectionsConfig} from '@/config/section';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaVuejs, FaJava, FaReact, FaWindows} from 'react-icons/fa';
import {useInView} from 'react-intersection-observer';

interface ExperienceCardProps {
  title: string;
  companyName: string;
  icon: React.ReactNode;
  iconBg: string;
  date: string;
  skills: string;
  points: string[];
}

const experiences: ExperienceCardProps[] = [
  {
    title: '물류로봇관제 웹 기능 추가',
    companyName: '(주)나비프라',
    icon: <FaVuejs />,
    iconBg: '#383E56',
    date: '2023.08 ~ 2023.09 프리랜서 근무',
    skills:
      'Vue, JavaScript, Vuex, Vuetify, three.js, Node.js, express.js, Redis, Docker',
    points: [
      '기존 웹 어플리케이션에 로봇의 RiDAR 실시간 데이터 표출 및 로봇 테스트 기능 추가',
      'Front-end 및 Back-end 메인 개발',
    ],
  },
  {
    title: '물류로봇관제 웹',
    companyName: '(주)나비프라',
    icon: <FaVuejs />,
    iconBg: '#383E56',
    date: '2022.10 ~ 2023.02 프리랜서 근무',
    skills:
      'Vue, JavaScript, TypeScript, Vuex, Pinia, Vuetify, three.js, Node.js, express.js, Redis, PostgreSQL, Docker',
    points: [
      '로봇이 Mapping한 지도를 뿌려주고 로봇의 위치와 경로를 설정할 수 있는 물류 로봇 관제 웹 어플리케이션 개발',
      'Front-end 및 Back-end 메인 개발',
    ],
  },
  {
    title: '현대자동차 물류로봇관제 웹',
    companyName: '(주)나비프라',
    icon: <FaReact />,
    iconBg: '#383E56',
    date: '2022.06 프리랜서 근무',
    skills: 'React, JavaScript, Vuetify, three.js, Node.js, express.js, Redis',
    points: [
      '현대자동차에서 사용하는 물류 로봇을 관제하는 웹 어플리케이션 개발',
      'Front-end 및 Back-end 메인 개발',
    ],
  },
  {
    title: '웹용 품질관리 솔루션',
    companyName: '(주)에스이랩',
    icon: <FaReact />,
    iconBg: '#383E56',
    date: '2022.02 ~ 2022.07 프리랜서 근무',
    skills: 'React, TypeScript, Next.js, Redux, Material UI',
    points: [
      '제조 공장의 품질 향상을 위한 데이터 분석/가공/시각화 솔루션으로 윈도우용 어플리케이션을 웹 어플리케이션으로 마이그레이션',
      'Front-end 메인 개발',
    ],
  },
  {
    title: '기상청 홈페이지 통합 정비 사업',
    companyName: '(주)에스이랩',
    icon: <FaJava />,
    iconBg: '#383E56',
    date: '2021.04',
    skills: 'Java, JavaScript, HTML/CSS, Tomcat',
    points: ['기상청 지방청 및 지청 홈페이지 개선', 'Front-end, Back-end 개발'],
  },
  {
    title: '윈도우용 품질관리 솔루션',
    companyName: '(주)에스이랩',
    icon: <FaWindows />,
    iconBg: '#383E56',
    date: '2019.02 ~ 2021.04',
    skills: 'C#, XMAL, WPF, HTML/CSS, Docker, Jenkins, swagger',
    points: [
      '제조 공장의 품질 향상을 위한 데이터 분석/가공/시각화 솔루션으로 윈도우즈용 프로그램 기획/운영/개발',
      'Front-end, Back-end 메인 개발',
    ],
  },
  {
    title: '기상청 이중편파레이더 현업예보지원',
    companyName: '(주)에스이랩',
    icon: <FaReact />,
    iconBg: '#383E56',
    date: '2018.06 ~ 2020.11',
    skills:
      'React Native, Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat',
    points: [
      '기상청 레이더 정보 및 날씨 경보를 표출하는 웹 및 안드로이드/iOS 앱 개발',
      'Front-end, Back-end 메인 개발',
    ],
  },
  {
    title: '수자원공사 위성산출물 표출 시스템',
    companyName: '(주)에스이랩',
    icon: <FaJava />,
    iconBg: '#383E56',
    date: '2018.12 ~ 2019.02',
    skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
    points: [
      '위성 지도 위에 위성산출물을 표출하는 GIS 기반 웹 사이트 개발',
      'Front-end, Back-end 메인 개발',
    ],
  },
  {
    title: '기상청 국가기후자료관리 및 서비스체계 구축',
    companyName: '(주)에스이랩',
    icon: <FaJava />,
    iconBg: '#383E56',
    date: '2018.02 ~ 2018.05',
    skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat',
    points: [
      '기상청 기상기후 데이터를 다양한 포맷으로 다운로드/열람하는 기상자료개방포털 개발',
      'Front-end, Back-end 개발',
    ],
  },
  {
    title: '우주전파센터 우주환경 예보 통합모델 개발',
    companyName: '(주)에스이랩',
    icon: <FaJava />,
    iconBg: '#383E56',
    date: '2018.02 ~ 2018.04',
    skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
    points: [
      '우주환경 예보 분석 결과를 표출하는 웹 어플리케이션으로 표출 속도 110% 개선 및 컨텐츠 추가 개발',
      'Front-end, Back-end 개발',
    ],
  },
  {
    title: '서울시 건축물 내진성능 자가점검 시스템 웹 개발',
    companyName: '(주)에스이랩',
    icon: <FaJava />,
    iconBg: '#383E56',
    date: '2018.01 ~ 2019.01',
    skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, JEUS',
    points: [
      '건물 내진성능 자가점검 시스템과 지진 정보 제공 대국민 웹 개발 및 운영',
      'Front-end, Back-end 개발',
    ],
  },
];

function ExperienceCard(experience: ExperienceCardProps) {
  const {ref, inView} = useInView({threshold: 0});
  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: '#F7F3E6',
          color: '#01425E',
        }}
        contentArrowStyle={{borderRight: '7px solid  #F7F3E6'}}
        date={experience.date}
        iconStyle={{
          background: 'white',
          color: '#01425E',
        }}
        icon={experience.icon}
      >
        <div>
          <h3 className='text-[24px] font-bold text-primary'>
            {experience.title}
          </h3>
          <p
            className='text-[16px] font-semibold text-secondary'
            style={{margin: 0}}
          >
            {experience.companyName}
          </p>
          <p
            className='text-[16px] font-semibold text-secondary'
            style={{margin: 0}}
          >
            {experience.skills}
          </p>
        </div>

        <ul className='ml-2 mt-3 list-disc'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className=' text-md pl-1'>
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
}

export default function Experience() {
  return (
    <section>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.experience} />

      <div className='mt-20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
