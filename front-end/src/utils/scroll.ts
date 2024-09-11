import {NavIdType} from '@/types';

export function handleScroll(id: NavIdType) {
  const element = document.getElementById(id);
  if (id === 'main') {
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else {
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      window.history.pushState(null, '', `#${id}`);
    }
  }
}
