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
    projects: Required<TSection>;
  };
};

export const sectionsConfig: TSectionList = {
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: '이름',
        placeholder: "What's your name?",
      },
      email: {span: '이메일 주소', placeholder: "What's your email?"},
      message: {
        span: '메시지',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `Java 웹 개발자로 시작하여, 웹, 모바일 앱, 윈도우 프로그램 등 다양한 애플리케이션을 개발하고 풀스택 개발자를 꿈꾸는 6년 차 개발자입니다.
            회사에서 빠른 습득력을 인정받아 다양한 업무를 진행해왔으며 회사 솔루션 개발 기획부터 개발, 배포, 운영까지 모두 담당하였습니다.
            첫 번째 회사가 주로 공공사업을 참여하던 회사이었기에 다양한 기술을 사업에 적용하기 쉽지 않았지만 연구 개발 사업에 평소에 눈여겨보던 
            React Native를 제안하여 모바일 애플리케이션을 React Native로 개발하기도 했습니다.
            이후 JavaScript와 TypeScript에 흥미를 느껴, 현재는 프리랜서로 React와 Vue를 활용한 프론트엔드 개발뿐만 아니라, Node.js를 이용한 백엔드 개발도 함께하고 있습니다.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    projects: {
      p: 'My work',
      h2: 'Projects.',
      content: `그동안 제가 사용했던 다양한 라이브러리를 사용하여 간단한 컴포넌트들을 만들어보았습니다. 앞으로도 성장하며 새로운 아이디어를 계속 실현해 나가겠습니다.`,
    },
  },
};
