// src/components/TimelineClientWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import TimelineSlider with SSR disabled
const TimelineSlider = dynamic(() => import('@/components/TimelineSlider'), { ssr: false });

const TimelineClientWrapper = () => {
  return <TimelineSlider />;
};

export default TimelineClientWrapper;
