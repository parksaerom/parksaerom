import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';
import {useState} from 'react';
import {
  selectSelectedConfidenceLevel,
  updateSelectedConfidenceLevel,
  useDispatch,
  useSelector,
} from '@/lib/redux';
export default function ConfidenceLevelSlider() {
  const dispatch = useDispatch();
  const confidenceLevel = useSelector(selectSelectedConfidenceLevel);

  function udateConfidenceLevel(value: number[]) {
    dispatch(updateSelectedConfidenceLevel(value[0]));
  }

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
        max={0.99}
        defaultValue={[confidenceLevel]}
        step={0.01}
        onValueChange={(value) => udateConfidenceLevel(value)}
        className='[&_[role=slider]]:h-4 [&_[role=slider]]:w-4'
      />
    </>
  );
}
