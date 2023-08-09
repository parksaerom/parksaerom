import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className='container relative flex h-full flex-col'>
      <div className='mx-auto my-12'>
        <Image
          src='/images/laptop.jpg'
          width={500}
          height={300}
          alt='Main image'
          className='block'
        />
      </div>
      <div className='mx-auto text-center leading-7'>
        <h1 className='scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl'>
          안녕하세요! 개발자 박새롬의 포트폴리오 웹 사이트에 오신 것을
          환영합니다.
        </h1>
        <p className='text-sm font-semibold lg:text-lg [&:not(:first-child)]:mt-6'>
          저의 포트폴리오 웹 사이트에서는 과거 프로젝트들을 간단히 구현한
          페이지와, 그리고 개발 관련 블로그 등을 확인하실 수 있습니다.
        </p>
        <p className='text-sm font-semibold lg:text-lg'>
          제가 경험한 다양한 기술과 프로젝트들을 살펴보시고, 저에 대해 더 자세히
          알아가시기 바랍니다.
        </p>
        <p className='text-sm font-semibold lg:text-lg [&:not(:first-child)]:mt-6'>
          궁금한 사항이나 협업 제안 등이 있으시면 언제든지 저에게 연락 주시기
          바랍니다. 감사합니다!
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Saerom Park',
};
