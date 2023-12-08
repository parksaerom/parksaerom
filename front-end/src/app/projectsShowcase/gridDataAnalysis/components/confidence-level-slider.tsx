'use client';

import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';
import {useState} from 'react';

export default function ConfidenceLevelSlider() {
  const [confidenceLevel, setConfidenceLevel] = useState([0.95]);

  return (
    <>
      <div className='flex items-center justify-between'>
        <Label htmlFor='confidence'>신뢰 수준</Label>
        <span className='w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border'>
          {confidenceLevel}
        </span>
      </div>
      <Slider
        id='confidence'
        max={1}
        defaultValue={confidenceLevel}
        step={0.01}
        onValueChange={setConfidenceLevel}
        className='[&_[role=slider]]:h-4 [&_[role=slider]]:w-4'
      />
    </>
  );
}
