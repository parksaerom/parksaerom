'use client';

import {styles} from '@/styles/common';
import React, {useEffect} from 'react';
import {useState} from 'react';

interface TypewriterExtractTextArray {
  text: string;
  className: string;
}

interface TypewriterProps {
  children: React.ReactNode;
  speed?: number;
}

function Typewriter({children, speed = 100}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
  const childrenNode = React.Children.toArray(children);

  function extractTextWithClassName(
    node: React.ReactNode,
  ): TypewriterExtractTextArray {
    if (typeof node === 'string') {
      return {text: node, className: ''};
    } else if (React.isValidElement(node)) {
      const children = React.Children.toArray(node.props.children);
      const className = node.props.className || '';

      const childTexts = children.map((child) =>
        extractTextWithClassName(child),
      );
      const combinedText = childTexts.map((child) => child.text).join('');
      const combinedClassName = childTexts
        .map((child) => child.className)
        .join(' ');

      return {text: combinedText, className: combinedClassName || className};
    }
    return {text: '', className: ''};
  }

  useEffect(() => {
    let extractTextNode: React.ReactNode[] = [];
    let index = 0;

    setDisplayedText([]);

    childrenNode.map((node, childrenNodeIndex) => {
      const {text, className} = extractTextWithClassName(node);
      const chars = text.split('').map((char, i) => (
        <span key={`${childrenNodeIndex}-${i}`} className={className}>
          {char}
        </span>
      ));
      extractTextNode.push(...chars);
    });

    const interval = setInterval(() => {
      if (index < extractTextNode.length) {
        setDisplayedText((prev) => [...prev, extractTextNode[index - 1]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <>{displayedText}</>;
}

export default function MainTypewriter() {
  return (
    <h1 className={`${styles.mainHeadText} static text-white`}>
      <Typewriter>
        안녕하세요, 저는 <span className='text-mainBackground'>박새롬</span>
        입니다.
      </Typewriter>
    </h1>
  );
}
