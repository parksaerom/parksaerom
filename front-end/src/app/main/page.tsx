import {styles} from '@/styles/common';
import ComputersCanvas from '@/app/main/components/computer';
import Typewriter from '@/components/type-writer';

export default function Main() {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 left-[11vw] top-[13vh] max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-mainBackground' />
          <div className='h-40 w-1 bg-gradient-to-b from-mainBackground sm:h-60' />
        </div>

        <div>
          <Typewriter className={`${styles.mainHeadText} static text-white`}>
            안녕하세요, 저는 <span className='text-mainBackground'>박새롬</span>
            입니다.
          </Typewriter>
          <p className={`${styles.mainSubText} text-white-100 static mt-2`}>
            저는 풀스택 개발자를 꿈꾸고 있습니다.
            <br className='hidden sm:block' />
            제가 경험한 다양한 기술과 프로젝트들을 살펴보시고, 저에 대해 더
            자세히 알아가시기 바랍니다.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
}
