'use client';
import React from 'react';
import ReactPlayer from 'react-player/file';
import {NavigationBottom2} from '@/components/navbar/navigation.bottom';

export function ShortsView() {
  return (
    <div>
      <div className="fixed inset-0">
        <ReactPlayer
          controls
          height="100%"
          muted
          playing
          url="/fakedb/short.mp4"
          width="100%"
        />
      </div>
      <NavigationBottom2 />
    </div>
  );
}
