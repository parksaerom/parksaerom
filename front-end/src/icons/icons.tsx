import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

interface IconWithNameProps extends IconProps {
  name: string;
}

function Icon({
  name,
  color = 'currentColor',
  className = '',
}: IconWithNameProps) {
  return (
    <svg className={`${className}`} fill={color}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}

function createIcon(name: string) {
  return function IconComponent(props: IconProps) {
    return <Icon name={name} {...props} />;
  };
}

export const PiRows = createIcon('PiRows');
export const PiColumns = createIcon('PiColumns');
export const BiLoaderAlt = createIcon('BiLoaderAlt');
export const BiPlay = createIcon('BiPlay');
export const BiStop = createIcon('BiStop');
export const BiPause = createIcon('BiPause');
export const BiSolidDownload = createIcon('BiSolidDownload');
export const BiMenu = createIcon('BiMenu');
export const FaJavascript = createIcon('FaJavascript');
export const FaJava = createIcon('FaJava');
export const FaReact = createIcon('FaReact');
export const FaWindows = createIcon('FaWindows');
