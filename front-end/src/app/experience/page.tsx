import '@xyflow/react/dist/style.css';
import {sectionsConfig} from '@/config/section';
import SectionHeader from '@/components/section-header';
import ExperienceFlow from '@/app/experience/components/experience-flow';
import ExperienceText from '@/app/experience/components/experience-text';
import Determination from '@/app/experience/components/determination';
import {Section} from '@/components/section';

export default function Experience() {
  return (
    <Section id='experience'>
      <SectionHeader useMotion={true} {...sectionsConfig.sections.experience} />
      <div className='mt-20 flex h-[5100px] flex-row gap-10'>
        <ExperienceText className='relative hidden h-full basis-2/5 sm:flex' />
        <ExperienceFlow className='sm:basis-3/5' />
      </div>
      <Determination className=' -bottom-6' />
    </Section>
  );
}
