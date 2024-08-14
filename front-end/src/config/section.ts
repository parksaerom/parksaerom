type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TSectionList = {
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const sectionsConfig: TSectionList = {
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: {span: 'Your Email', placeholder: "What's your email?"},
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `Java 개발자로 시작하여, 웹, 모바일 앱, 윈도우 프로그램 등 다양한 애플리케이션을 개발하고 풀스택 개발자를 꿈꾸고 있습니다.
            회사에서 빠른 습득력을 인정받아 다양한 업무를 진행해왔으며 회사 솔루션 개발 기획부터 개발, 배포, 운영까지 모두 담당하였습니다.
            
            첫 번째 회사가 주로 공공사업을 참여하던 회사이었기에 다양한 기술을 사업에 적용하기 쉽지 않았지만 연구 개발 사업에 평소에 눈여겨보던 
            React Native를 제안하여 모바일 애플리케이션을 React Native로 개발하기도 했습니다.
            이후 JavaScript, TypeScript 프로젝트에 흥미를 느껴 프리랜서로 React와 Vue Front-end 개발과 함께 Node.js Back-end 개발을 진행하였습니다.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories and live demos in it. It reflects my
      ability to solve complex problems, work with different technologies,
      and manage projects effectively.`,
    },
  },
};