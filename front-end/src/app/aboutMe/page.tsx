import Image from 'next/image';
import {BiMailSend, BiPhoneCall} from 'react-icons/bi';
import profile from '@/assets/images/profile.png';
import {Metadata} from 'next/types';

export default function AboutMePage() {
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

  const projectList: {
    name: string;
    company: string;
    skills: string;
    contents: string[];
  }[] = [
    {
      name: '물류로봇관제 웹 (2023.08 ~ 2023.09 프리랜서 근무)',
      company: '(주)나비프라',
      skills:
        'Vue, JavaScript, Vuex, Vuetify, three.js, Node.js, express.js, Redis, Docker',
      contents: [
        '기존 웹 어플리케이션에 로봇의 RiDAR 실시간 데이터 표출 및 로봇 테스트 기능 추가',
        'Front-end 및 Back-end 메인 개발',
      ],
    },
    {
      name: '물류로봇관제 웹 (2022.10 ~ 2023.02 프리랜서 근무)',
      company: '(주)나비프라',
      skills:
        'Vue, JavaScript, TypeScript, Vuex, Pinia, Vuetify, three.js, Node.js, express.js, Redis, PostgreSQL, Docker',
      contents: [
        '로봇이 Mapping한 지도를 뿌려주고 로봇의 위치와 경로를 설정할 수 있는 물류 로봇 관제 웹 어플리케이션 개발',
        'Front-end 및 Back-end 메인 개발',
      ],
    },
    {
      name: '현대차 물류로봇관제 웹 (2022.06 프리랜서 근무)',
      company: '(주)나비프라',
      skills:
        'React, JavaScript, Vuetify, three.js, Node.js, express.js, Redis',
      contents: [
        '물류 로봇을 관제하는 웹 어플리케이션 개발',
        'Front-end 및 Back-end 개발',
      ],
    },
    {
      name: '웹용 품질관리 솔루션 (2022.02 ~ 2022.07 프리랜서 근무)',
      company: '(주)에스이랩',
      skills: 'React, TypeScript, Next.js, Redux, Material UI',
      contents: [
        '제조 공장의 품질 향상을 위한 데이터 분석/가공/시각화 솔루션으로 윈도우용 어플리케이션을 웹 어플리케이션으로 마이그레이션',
        'Front-end 메인 개발',
      ],
    },
    {
      name: '기상청 홈페이지 통합 정비 사업 (2021.04)',
      company: '(주)에스이랩',
      skills: 'Java, JavaScript, HTML/CSS, Tomcat',
      contents: [
        '기상청 지방청 및 지청 홈페이지 개선',
        'Front-end, Back-end 개발',
      ],
    },
    {
      name: '윈도우용 품질관리 솔루션 (2019.02 ~ 2021.04)',
      company: '(주)에스이랩',
      skills: 'C#, XMAL, WPF, HTML/CSS, Docker, Jenkins, swagger',
      contents: [
        '제조 공장의 품질 향상을 위한 데이터 분석/가공/시각화 솔루션으로 윈도우즈용 프로그램 기획/운영/개발',
        'Front-end, Back-end 메인 개발',
      ],
    },
    {
      name: '기상청 이중편파레이더 현업예보지원 (2018.06 ~ 2020.11)',
      company: '(주)에스이랩',
      skills:
        'Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat, React Native',
      contents: [
        '기상청 레이더 정보 및 날씨 경보를 표출하는 웹 및 안드로이드/iOS 앱 개발',
        'Front-end, Back-end 메인 개발',
      ],
    },
    {
      name: '수자원공사 위성산출물 표출 시스템 (2018.12 ~ 2019.02)',
      company: '(주)에스이랩',
      skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
      contents: [
        '위성 지도 위에 위성산출물을 표출하는 GIS 기반 웹 사이트 개발',
        'Front-end, Back-end 메인 개발',
      ],
    },
    {
      name: '기상청 국가기후자료관리 및 서비스체계 구축 (2018.02 ~ 2018.05)',
      company: '(주)에스이랩',
      skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat',
      contents: [
        '기상청 기상기후 데이터를 다양한 포맷으로 다운로드/열람하는 기상자료개방포털 개발',
        'Front-end, Back-end 개발',
      ],
    },
    {
      name: '우주전파센터 우주환경 예보 통합모델 개발 (2018.02 ~ 2018.04)',
      company: '(주)에스이랩',
      skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
      contents: [
        '우주환경 예보 분석 결과를 표출하는 웹 어플리케이션으로 표출 속도 110% 개선 및 컨텐츠 추가 개발',
        'Front-end, Back-end 개발',
      ],
    },
    {
      name: '서울시 건축물 내진성능 자가점검 시스템 웹 개발 (2018.01 ~ 2019.01)',
      company: '(주)에스이랩',
      skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, JEUS',
      contents: [
        '건물 내진성능 자가점검 시스템과 지진 정보 제공 대국민 웹 개발 및 운영',
        'Front-end, Back-end 개발',
      ],
    },
  ];

  return (
    <div className='container relative flex h-full w-3/4 flex-col'>
      <article className='my-10 leading-7'>
        <Image
          src={profile}
          width={150}
          height={150}
          alt='Profile'
          className='my-2 block'
        />
        <h1 className='my-5 scroll-m-20 text-xl font-bold tracking-tight lg:text-4xl'>
          박새롬
        </h1>
        <section className='my-5 text-sm leading-7 lg:text-base'>
          <div>
            <BiMailSend className='mr-2 inline h-5 w-5' />
            <span>saerom216@gmail.com</span>
          </div>
          <div>
            <BiPhoneCall className='mr-2 inline h-5 w-5' />
            <span>010-5224-2993</span>
          </div>
        </section>
        <section className='my-10 text-base lg:text-lg'>
          <h1 className='my-3 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight lg:text-3xl'>
            소개
          </h1>
          <p>
            Java 개발자로 시작하여, 웹, 모바일 앱, 윈도우 프로그램 등 다양한
            애플리케이션을 개발하고 풀스택 개발자를 꿈꾸고 있습니다.
          </p>
          <p>
            회사에서 빠른 습득력을 인정받아 다양한 업무를 진행해왔으며 회사
            솔루션 개발 기획부터 개발, 배포, 운영까지 모두 담당하였습니다.
          </p>
          <p>
            공공사업 제안에 참여하였으며 제안사업 수행 시 기획부터 설계, 개발,
            납품까지 전체 프로세스에 참여한 경험이 있습니다. 제안 문서의 기술
            파트를 작성하면서 새로운 기술에 대해 검토하고 필요한 기술이라
            판단되면 기술 제안도 하였습니다.
          </p>
          <p className='[&:not(:first-child)]:mt-6'>
            변화가 빠른 IT업계에서 빠른 습득력과 적응력은 분명히 큰 장점이라고
            생각합니다. 그리고 그 능력을 인정받아 웹, 모바일 앱, 윈도우 프로그램
            등 까지 다양한 업무를 진행해왔습니다.
          </p>
          <p>
            업무가 주어질 때마다 달라지는 개발환경들이 한 분야에서 꾸준히
            커리어를 쌓아가는 것에 도움이 될 것인가 하는 고민이 들었지만 연장
            탓하는 장인이 되지 않기 위해 빠르게 습득하고 내 것으로 만들기 위한
            노력을 아끼지 않았습니다. 신입 개발자에게 어떤 것들을 배웠는지
            물어보고, 하루가 멀다 하고 바뀌는 스타트업 채용공고 속 요구 기술들을
            보면서 뒤처지지 않기 위해 주의 깊게 지켜보았습니다. 첫 번째 회사가
            주로 공공사업을 참여하던 회사이었기에 다양한 기술을 사업에 적용하기
            쉽지 않았지만 연구 개발 사업에 평소에 눈여겨보던 React Native를
            제안하여 모바일 애플리케이션을 React Native로 개발하기도 했습니다.
            이후 JavaScript 프로젝트에 흥미를 느껴 프리랜서로 React와 Vue
            Front-end 개발과 함께 Node.js Back-end 개발을 진행하였습니다.
          </p>
          <p className='[&:not(:first-child)]:mt-6'>
            물론 여러 업무를 해오며 어려움이 없었던 것은 아닙니다.
          </p>
          <p>
            통계를 기반으로 한 품질관리 소프트웨어인 회사의 첫 솔루션에 기획부터
            참여를 하게 되면서 통계학의 익숙하지 않은 용어와 공식들은 큰
            장애물이었습니다. 하지만 제가 만족할 수 있는 솔루션을 개발하기 위해
            만 2년이 넘는 시간 동안 일주일에 1-2회 진행하는 서울대학교 통계학과
            교수님의 강의를 들으며 부족한 부분을 채워나갔습니다.
          </p>
          <p>
            저의 부족한 부분이 채워질 때마다 기능이 늘어가는 소프트웨어를 보며
            앞으로 어떤 업무가 주어지더라도 잘 해낼 수 있다는 자신감을
            얻었습니다.
          </p>
          <p>
            이런 자신감은 더 나은 개발자가 되겠다는 목표에 가까이 갈 수 있도록
            해주는 촉매가 되었고 지금도 성장을 하기 위해 노력하고 있습니다.
          </p>
        </section>
        <section className='my-20 text-base lg:text-lg'>
          <h1 className='my-3 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight lg:text-3xl'>
            보유 기술
          </h1>
          {skillsList.map((skill, index) => (
            <p key={index} className='[&:not(:first-child)]:mb-2'>
              <span className='font-bold'>{skill.title}</span>: {skill.content}
            </p>
          ))}
        </section>
        <section className='my-20 text-base lg:text-lg'>
          <h1 className='my-3 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight lg:text-3xl'>
            프로젝트 경험
          </h1>
          {projectList.map((project, index) => (
            <div className='mb-10' key={index}>
              <h2 className='relative mb-1 inline rounded bg-muted px-[0.3rem] py-[0.2rem] text-lg font-bold lg:text-xl'>
                {project.name}
              </h2>
              <p className='my-1 font-semibold'>{project.company}</p>
              <p className='font-semibold'>{project.skills}</p>
              <ul className='mb-6 ml-6 list-disc [&>li]:mt-2'>
                {project.contents.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'About Me',
};
