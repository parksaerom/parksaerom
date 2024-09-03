import '@xyflow/react/dist/style.css';
import {sectionsConfig} from '@/config/section';
import SectionHeader from '@/components/section-header';
import ExperienceFlow from '@/app/experience/experience-flow';
import ExperienceText from '@/app/experience/experience-text';
import Determination from '@/app/experience/determination';

export default function Experience() {
  return (
    <section>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.experience} />
      <div className='mt-20 flex h-[5300px] flex-row gap-10'>
        <ExperienceText className='relative h-full basis-2/5 sm:hidden md:block' />
        <ExperienceFlow className='basis-3/5' />
      </div>
      <Determination />
    </section>
  );
}
