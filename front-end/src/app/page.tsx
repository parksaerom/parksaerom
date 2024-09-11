import {MainHeader} from '@/components/main-header';
import Main from '@/app/main/page';
import About from '@/app/about/page';
import Experience from '@/app/experience/page';
import Projects from '@/app/projects/page';
import Contact from '@/app/contact/page';
export default function IndexPage() {
  return (
    <>
      <div className='bg-main-pattern bg-cover bg-no-repeat'>
        <MainHeader />
        <Main />
      </div>
      <div className='container my-24 grid gap-y-36'>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
