'use client';

import {usePathname} from 'next/navigation';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

interface ProjectsShowcaseLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({
  children,
}: ProjectsShowcaseLayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <div className='container relative'>
        <PageHeader className='page-header pb-8'>
          <PageHeaderHeading>
            {pathname === '/projectsShowcase/realTimeMonitoring'
              ? 'Real-time Monitoring'
              : pathname === '/projectsShowcase/robot'
              ? 'Robot'
              : ''}
          </PageHeaderHeading>
          <PageHeaderDescription>
            {pathname === '/projectsShowcase/realTimeMonitoring'
              ? '실시간으로 업데이트되는 데이터를 모니터링하며, 그래프와 데이터 테이블을 통해 데이터의 추이와 패턴을 분석하고 시각화합니다. 다양한 차트 유형을 제공하여 정보를 직관적으로 이해할 수 있습니다.'
              : pathname === '/projectsShowcase/robot'
              ? 'Robot'
              : ''}
          </PageHeaderDescription>
        </PageHeader>
        <section>
          <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
