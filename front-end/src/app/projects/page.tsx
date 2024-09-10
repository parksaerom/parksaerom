'use client';

import SectionHeader from '@/components/section-header';
import {sectionsConfig} from '@/config/section';
import {fadeIn} from '@/utils/motion';
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {ReactNode} from 'react';
import ThreeObjectControlPage from '@/app/projects/3dObjectControl/page';
import GridDataAnalysisPage from '@/app/projects/gridDataAnalysis/page';
import RealTimeMonitoringPage from '@/app/projects/realTimeMonitoring/page';
import {Section} from '@/components/section';

export interface ProjectsProps {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  page: ReactNode;
}

const projects: ProjectsProps[] = [
  {
    name: 'Real-time Monitoring',
    description:
      '실시간으로 업데이트되는 데이터를 모니터링하며, 그래프와 데이터 테이블을 통해 데이터의 추이와 패턴을 분석하고 시각화합니다.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-500',
      },
      {
        name: 'chartjs',
        color: 'text-lime-600',
      },
      {
        name: 'nextjs',
        color: 'text-pink-600',
      },
    ],
    image: '/images/monitoring.png',
    page: <RealTimeMonitoringPage />,
  },
  {
    name: 'Grid Data Analysis',
    description:
      '엑셀 그리드를 통해 데이터를 손쉽게 입력하고, 분석한 데이터를 시각적으로 표현하여 품질 개선과 의사결정에 도움을 줍니다.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-500',
      },
      {
        name: 'handsontable',
        color: 'text-lime-600',
      },
      {
        name: 'nextjs',
        color: 'text-pink-600',
      },
    ],
    image: '/images/grid-data-analysis.png',
    page: <GridDataAnalysisPage />,
  },
  {
    name: '3D Object Control',
    description:
      'three.js를 활용하여 귀여운 캐릭터를 표출하고, 3D 공간을 탐험할 수 있습니다.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-500',
      },
      {
        name: 'three.js',
        color: 'text-lime-600',
      },
      {
        name: 'nextjs',
        color: 'text-pink-600',
      },
    ],
    image: '/images/three-object-control.png',
    page: <ThreeObjectControlPage />,
  },
];

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  page,
}: {index: number} & ProjectsProps) {
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === ' ') {
      // 스페이스바 기본 동작 방지
      event.preventDefault();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial='offScreen'
          whileInView='onScreen'
          variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        >
          <Tilt
            glareEnable
            tiltEnable
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            glareBorderRadius='20px'
            glarePosition='all'
          >
            <div className='h-[46vh] w-full rounded-2xl border border-primary bg-card p-5 sm:w-[300px]'>
              <div className='relative h-56 w-full'>
                <img
                  src={image}
                  alt={name}
                  className='h-full w-full rounded-2xl object-cover'
                />
              </div>
              <div className='mt-5'>
                <h3 className='text-[24px] font-bold text-primary'>{name}</h3>
                <p className='mt-2 h-16 text-[14px] text-secondary'>
                  {description}
                </p>
              </div>
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      </DialogTrigger>
      <DialogContent onKeyDown={handleKeyDown} className='min-w-[75%]'>
        <DialogHeader className='container pt-3'>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {page}
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  return (
    <Section id='projects'>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.projects} />

      <div className='flex w-full'>
        <motion.p
          initial='offScreen'
          whileInView='onScreen'
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 max-w-6xl text-base leading-[30px] text-secondary lg:text-lg'
        >
          {sectionsConfig.sections.projects.content}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
