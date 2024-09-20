import {NavLinkType} from '@/components/main-header';

export interface SectionProps extends Pick<NavLinkType, 'id'> {
  children: React.ReactNode;
  className?: string;
}

export function Section({children, id, className = ''}: SectionProps) {
  return (
    <section id={id} className={`max-w-full scroll-mt-20 ${className}`}>
      {children}
    </section>
  );
}
