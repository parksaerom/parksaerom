'use client';
import {
  ReactFlow,
  type Node,
  type Edge,
  type DefaultEdgeOptions,
  NodeProps,
  NodeTypes,
  Position,
  Handle,
  EdgeProps,
  getBezierPath,
  EdgeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {fadeIn} from '@/utils/motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {selectIsMobile, useSelector} from '@/lib/redux';
import {MotionDiv} from '@/components/motion';

type ExperienceNodeType = Node<
  {
    index: number;
    title: string;
    companyName: string;
    date: string;
    skills: string;
    points: string[];
  },
  'experience'
>;

export const experienceArray = [
  {
    id: '0',
    position: {x: 5, y: 5, mobileY: 0},
    data: {
      index: 0,
      title: '서울시 지진안전포털',
      companyName: '(주)에스이랩',
      date: '2018.01 ~ 2019.01',
      skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, JEUS',
      points: [
        'Front-end, Back-end 개발',
        '서울시의 건축물 내진성능 자가점검 시스템 및 지진 정보를 제공하는 대국민 웹으로 사용자 페이지, 관리자 페이지 모두 개발하였습니다.',
        '지진 발생 위/경도를 받아 지도 위에 발생 지점을 표시하는 알고리즘과 건물 내진성능 확인 기능, 각 게시판, 사진 업로드 등의 기능을 개발하였고, 서울시청 서버인 JEUS에 배포하였습니다.',
      ],
    },
    targetPosition: Position.Bottom,
  },
  {
    id: '1',
    position: {x: 200, y: 450, mobileY: 480},
    data: {
      index: 1,
      title: '우주전파센터 인트라넷 우주환경예보 및 모델검증시스템',
      companyName: '(주)에스이랩',
      date: '2018.02 ~ 2018.04',
      skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
      points: [
        'Front-end, Back-end 개발',
        '우주환경 예보 결과 이미지 및 그래프를 표출하는 웹으로 개발되어 있던 Graphing Library인 Plotly.js를 사용한 그래프의 표출이 5~6초 정도 소요되어 sql문 및 파싱 부분 코드를 수정하여 0.5초로 표출 속도를 개선하고 제공되고 있던 콘텐츠를 추가하여 개발/배포하였습니다.',
      ],
    },
    sourcePosition: Position.Top,
  },
  {
    id: '2',
    position: {x: 120, y: 840, mobileY: 920},
    data: {
      index: 2,
      title: '기상청 기상자료개발포털',
      companyName: '(주)에스이랩',
      date: '2018.02 ~ 2018.05',
      skills: 'Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat',
      points: [
        'Front-end, Back-end 개발',
        '기상청 기상기후 데이터를 다양한 포맷으로 다운로드할 수 있고, 열람할 수 있는 웹으로 데이터 표출 형태 수정이나 값이 다르게 표출되고 있는 데이터 원인 파악 및 수정과 같은 유지보수 업무를 수행하였습니다.',
      ],
    },
  },
  {
    id: '3',
    position: {x: 5, y: 1220, mobileY: 1320},
    data: {
      index: 3,
      title: '기상청 우리동네레이더날씨알리미 앱(서비스 종료)',
      companyName: '(주)에스이랩',
      date: '2018.06 ~ 2020.11',
      skills:
        'React Native, Java, JavaScript, HTML/CSS, Spring, Oracle Database, Tomcat',
      points: [
        'Front-end, Back-end 메인 개발',
        '기상청 레이더 이미지 및 영상 정보를 표출하고 현재 위치 또는 지정 위치에 대한 날씨 위험 경보를 알려주는 웹앱으로 혼자 안드로이드, iOS 두 개의 플랫폼을 개발해야 했기 때문에 iOS와 안드로이드 두 개의 플랫폼을 지원하는 앱을 만들 수 있는 React Native를 사용하였습니다.',
      ],
    },
  },
  {
    id: '4',
    position: {x: 120, y: 1615, mobileY: 1755},
    data: {
      index: 4,
      title: '수자원공사 인트라넷 수질 모니터링 시스템',
      companyName: '(주)에스이랩',
      date: '2018.12 ~ 2019.02',
      skills: 'Java, JavaScript, HTML/CSS, Spring, MySQL, Tomcat',
      points: [
        'Front-end, Back-end 메인 개발',
        '위성 지도 위에 위성산출물을 표출하고 위성산출물에 대한 정보를 제공하는 웹 사이트로 OpenLayers 및 GeoServer를 이용하여 위성산출물을 위성지도 위에 표출하고 해당 위성산출물 이미지를 png, tif 파일로 다운로드할 수 있는 GIS 기반 웹 사이트 개발/배포/운영하였습니다.',
      ],
    },
  },

  {
    id: '5',
    position: {x: 200, y: 2000, mobileY: 2170},
    data: {
      index: 5,
      title: '윈도우즈용 품질관리 솔루션',
      companyName: '(주)에스이랩',
      date: '2019.02 ~ 2021.04',
      skills: 'C#, .NET, WPF, HTML/CSS, Docker, Jenkins, swagger',
      points: [
        'Front-end, Back-end 메인 개발',
        '제조 공장에서 생산되는 제품의 데이터들을 가공/시각화하여 품질 향상을 지원하는 품질관리 윈도우 프로그램으로 MSA, SPC, 검정/추정, 선형 회귀, 상관분석 등의 품질관리 데이터 분석 엔진을 C#언어를 사용하여 API로 개발하였습니다. WPF을 사용하여 Window GUI 및 그래프/보고서 표출 개발하였습니다.',
        'Docker 기반으로 Jenkins와 함께 제품 빌드, 배포, 업데이트를 자동화하였습니다.',
        '솔루션 개발을 위해 매주 1~2회 통계학과 교수님께 수업을 받으며 관련 지식 공부 후 이를 바탕으로 기획/개발/배포/운영을 진행하였습니다.',
        '데이터 바우처 사업을 통해 일반 기업들에게도 프로그램 커스터마이징 및 추가 기능을 개발을 하여 기획/개발/배포/운영을 진행하였습니다.',
      ],
    },
  },
  {
    id: '6',
    position: {x: 100, y: 2600, mobileY: 2785},
    data: {
      index: 6,
      title: '기상청 지방청 및 지청 홈페이지',
      companyName: '(주)에스이랩',
      date: '2021.04',
      skills: 'Java, JavaScript, HTML/CSS, Tomcat',
      points: [
        'Front-end, Back-end 개발',
        '기상청 지방청 및 지청 홈페이지를 개선하는 프로젝트로 3개의 지방청 홈페이지를 맡아 개발하였습니다. 날씨 예보, 공지사항, 보도 자료, 기관 소개 등의 기능을 포함한 웹 사이트로 현재 위치 기반 날씨, 날씨 검색, 일별 날씨, 주간 날씨 등의 기능을 모두 개발하였습니다.',
      ],
    },
  },
  {
    id: '7',
    position: {x: 20, y: 3450, mobileY: 3180},
    data: {
      index: 7,
      title: '웹용 품질관리 솔루션',
      companyName: '(주)에스이랩',
      date: '2022.02 ~ 2022.07 프리랜서 근무',
      skills: 'C#, .NET, React, TypeScript, Next.js, Redux, Material UI',
      points: [
        'Front-end, Back-end 메인 개발',
        '위에서 소개된 제조 공장에서 생산되는 제품의 품질향상에 필요한 데이터들을 가공/시각화하여 품질 향상을 지원하는 의사결정에 도움을 주는 웹으로 기존 개발하였던 윈도우즈용 프로그램을 웹으로 변경하였습니다. 기존 C#으로 개발한 API에 React로 웹 어플리케이션을 개발하여 연결하였습니다. 엑셀 형식의 데이터 입력 컴포넌트를 개발하고 C# API를 연결하여 데이터 결과를 표출하였습니다',
      ],
    },
  },
  {
    id: '8',
    position: {x: 120, y: 3850, mobileY: 3635},
    data: {
      index: 8,
      title: 'H사 물류로봇관제 웹',
      companyName: '(주)나비프라',
      date: '2022.06 프리랜서 근무',
      skills:
        'React, JavaScript, Material UI, Three.js, Node.js, express.js, Redis',
      points: [
        'Front-end 및 Back-end 메인 개발',
        '물류 로봇을 관제하는 웹 어플리케이션으로 로봇의 경로를 설정하고 명령을 내릴 수 있는 로봇 관제 페이지와 로봇 정보 관리 페이지를 추가 개발하였습니다.',
        'Redis를 사용하여 로봇과 데이터를 주고 받는 Back-end API와 Three.js를 사용하여 로봇의 상태, 경로, 움직임 등을 표출하고 로봇을 제어하는 Front-end 모두 개발하였습니다.',
      ],
    },
  },
  {
    id: '9',
    position: {x: 5, y: 4250, mobileY: 4070},
    data: {
      index: 9,
      title: '물류로봇관제 웹',
      companyName: '(주)나비프라',
      date: '2022.10 ~ 2023.02 프리랜서 근무',
      skills:
        'Vue, JavaScript, TypeScript, Vuex, Pinia, Vuetify, Three.js, Node.js, express.js, Redis, PostgreSQL, Docker',
      points: [
        'Front-end 및 Back-end 메인 개발',
        '로봇이 Mapping한 지도를 뿌려주고 로봇의 위치와 경로를 설정할 수 있으며 로봇 정보를 조회 및 수정할 수 있는 물류 로봇을 관제하는 웹 어플리케이션으로 S사, P사 등에 납품되었습니다. 각 기업에 맞게 추가 요구사항들을 개발하고 API를 개발하였습니다.',
        'Redis/PostgreSQL을 사용하여 로봇과 통신하고, 로그인 관리를 하는 Back-end API와 Three.js를 사용하여 로봇의 상태, 움직임 등을 표출하고 로봇을 제어하는 프론트엔드 모두 개발하였으며 Docker기반으로 변경을 도왔습니다.',
        '로봇 하나만 관제하는 Navi-Core, 로봇 여러 개를 관제하는 Navi-Brain으로 프로젝트가 나뉘어 있었는데 Navi-Core는 JavaScript/Vue2/Vuex, Navi-Brain은 TypeScript/Vue3/Pinia를 사용하였습니다.',
      ],
    },
  },
  {
    id: '10',
    position: {x: 100, y: 4850, mobileY: 4720},
    data: {
      index: 10,
      title: '물류로봇관제 웹',
      companyName: '(주)나비프라',
      date: '2023.08 ~ 2023.09 프리랜서 근무',
      skills:
        'Vue, JavaScript, Vuex, Vuetify, Three.js, Node.js, express.js, Redis, Docker',
      points: [
        'Front-end 및 Back-end 메인 개발',
        '로봇의 RiDAR 실시간 데이터를 그래프와 표로 표출/저장하는 기능과 로봇의 위치와 경로를 설정하며 단위 테스트를 할 수 있는 기능을 개발하였습니다.',
        'Redis를 사용하여 로봇과 데이터를 주고 받는 Back-end API와 Three.js, Chart.js를 사용하여 실시간 데이터 표출, 단위 테스트 Front-end 모두 개발하였습니다.',
      ],
    },
  },
] as const;

interface ExperienceFlowProps {
  className?: string;
}

function ExperienceEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return <path id={id} className='react-flow__edge-path' d={edgePath} />;
}

function ExperienceNode({data}: NodeProps<ExperienceNodeType>) {
  return (
    <>
      <MotionDiv
        variants={fadeIn('left', 'spring', 0.1, 1.75)}
        className='flex'
      >
        <Card className='w-[24vw] min-w-80 cursor-default border-primary bg-card'>
          <CardHeader className='mt-5 py-3'>
            <CardDescription className='text-secondary'>
              {data.date}
            </CardDescription>
            <CardTitle className='text-lg text-primary sm:text-2xl'>
              {data.title}
            </CardTitle>
            <CardDescription className='text-sm font-semibold text-secondary sm:text-[16px]'>
              {data.companyName}
            </CardDescription>
            <CardDescription className='text-sm font-semibold text-secondary sm:text-[16px]'>
              {data.skills}
            </CardDescription>
          </CardHeader>
          <CardContent className='ml-5 text-secondary'>
            <ul className='list-disc'>
              {data.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='pl-1 text-sm sm:text-base'
                >
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </MotionDiv>
      {data.index === 0 ? (
        <></>
      ) : (
        <Handle
          type='target'
          position={Position.Top}
          id='target'
          className='border-transparent bg-transparent'
        />
      )}
      <Handle
        type='source'
        position={Position.Bottom}
        id='source'
        className='border-transparent bg-transparent'
      />
    </>
  );
}

function TransparentNode({data}: NodeProps) {
  return (
    <div className='relative h-1 w-1'>
      <Handle
        type='target'
        position={Position.Top}
        id='target'
        className='border-transparent bg-transparent'
      />
    </div>
  );
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const nodeTypes: NodeTypes = {
  experience: ExperienceNode,
  transparent: TransparentNode,
};

const edgeTypes: EdgeTypes = {
  experience: ExperienceEdge,
};

export default function ExperienceFlow({className = ''}: ExperienceFlowProps) {
  const isMobile = useSelector(selectIsMobile);
  const initialNodes: Node[] = [
    ...experienceArray.map((experience) => ({
      ...experience,
      type: 'experience',
      position: {
        x: isMobile ? 3 : experience.position.x,
        y: isMobile ? experience.position.mobileY : experience.position.y,
      },
    })),
    {
      id: 'last',
      position: {
        x: isMobile ? 150 : 30,
        y: isMobile ? 5400 : 5500,
      },
      type: 'transparent',
      data: {},
      ariaLabel: 'transparent_node',
    },
  ];
  const initialEdges: Edge[] = experienceArray.map((experience, index) => {
    if (index === experienceArray.length - 1) {
      return {
        id: `e${experience.id}-last`,
        source: experience.id,
        target: 'last',
        type: 'experience',
        sourceHandle: 'source',
        targetHandle: 'target',
      };
    } else {
      return {
        id: `e${experience.id}-${experienceArray[index + 1].id}`,
        source: experience.id,
        target: experienceArray[index + 1].id,
        type: 'experience',
        style: {stroke: 'black', strokeWidth: 3},
      };
    }
  });

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      elementsSelectable={false}
      nodesConnectable={false}
      nodesDraggable={false}
      zoomOnScroll={false}
      panOnScroll={false}
      panOnDrag={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      fitView
      fitViewOptions={{padding: 0}}
      proOptions={{hideAttribution: true}}
      className={`pointer-events-none ${className}`}
    />
  );
}
