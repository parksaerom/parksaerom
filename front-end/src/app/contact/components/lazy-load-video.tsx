'use client';

import {useEffect, useRef, useState} from 'react';

function LazyLoadVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isLoaded]);

  return (
    <video
      ref={videoRef}
      autoPlay={isLoaded}
      loop
      muted
      playsInline
      className='absolute left-0 top-0 h-full w-full object-cover'
    >
      {isLoaded && <source src='/images/sky.webm' type='video/webm' />}
      브라우저가 비디오 태그를 지원하지 않습니다.
    </video>
  );
}

export default LazyLoadVideo;
