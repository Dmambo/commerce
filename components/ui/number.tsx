'use client';

import { AnimatedNumber } from './animatedNumber';


export function AnimatedNumberBasic({ value }: { value: number }) {


  return (
    <div className='flex w-full items-center justify-center'>
 
      <AnimatedNumber
        className='inline-flex items-center font-mono text-2xl font-light '
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
    </div>
  );
}
