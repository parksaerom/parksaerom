import Image from 'next/image';
import {BiMailSend, BiPhoneCall} from 'react-icons/bi';
import profile from '@/assets/images/profile.png';

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

export default function SelfIntroductionAndSkillsPage() {
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
          <section>
            <BiMailSend className='mr-2 inline h-5 w-5' />
            <span>saerom216@gmail.com</span>
          </section>
          <section>
            <BiPhoneCall className='mr-2 inline h-5 w-5' />
            <span>010-5224-2993</span>
          </section>
        </section>
        <section className='my-10 text-sm lg:text-base'>
          <h1 className='my-3 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight lg:text-2xl'>
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
            등 까지 다양한 업무를 진행해왔습니다. 업무가 주어질 때마다 달라지는
            개발환경들이 한 분야에서 꾸준히 커리어를 쌓아가는 것에 도움이 될
            것인가 하는 고민이 들었지만 연장 탓하는 장인이 되지 않기 위해 빠르게
            습득하고 내 것으로 만들기 위한 노력을 아끼지 않았습니다.
          </p>
          <p>
            신입 개발자에게 어떤 것들을 배웠는지 물어보고, 하루가 멀다 하고
            바뀌는 스타트업 채용공고 속 요구 기술들을 보면서 뒤처지지 않기 위해
            주의 깊게 지켜보았습니다. 첫 번째 회사가 주로 공공사업을 참여하던
            회사이었기에 다양한 기술을 사업에 적용하기 쉽지 않았지만 연구 개발
            사업에 평소에 눈여겨보던 React Native를 제안하여 모바일
            애플리케이션을 React Native로 개발하기도 했습니다. 이후 JavaScript
            프로젝트에 흥미를 느껴 프리랜서로 React와 Vue Front-end 개발과 함께
            Node.js Back-end 개발을 진행하였습니다.
          </p>
          <p className='[&:not(:first-child)]:mt-6'>
            물론 여러 업무를 해오며 어려움이 없었던 것은 아닙니다.
          </p>
          <p>
            통계를 기반으로 한 품질관리 소프트웨어인 회사의 첫 솔루션에 기획부터
            참여를 하게 되면서 통계학의 익숙하지 않은 용어와 공식들은 큰
            장애물이었습니다. 하지만 제가 만족할 수 있는 솔루션을 개발하기 위해
            만 2년이 넘는 시간 동안 일주일에 1-2회 진행하는 통계학 교수님의
            강의를 들으며 부족한 부분을 채워나갔습니다.
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
        <section className='my-10 text-sm lg:text-base'>
          <h1 className='my-3 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight lg:text-2xl'>
            보유 기술
          </h1>
          {skillsList.map((skill) => (
            <p className='[&:not(:first-child)]:mb-2'>
              <span className='font-bold'>{skill.title}</span>: {skill.content}
            </p>
          ))}
        </section>
      </article>
    </div>
  );
}

export const metadata = {
  title: 'Self-introduction/Skills',
};
