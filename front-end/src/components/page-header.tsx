import {cn} from '@/lib/shadcn-ui/utils';

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'flex flex-col items-start gap-2 px-4 pt-8 md:pt-12',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <h3
      className={cn('text-lg text-muted-foreground sm:text-xl', className)}
      {...props}
    />
  );
}

export {PageHeader, PageHeaderHeading, PageHeaderDescription};
