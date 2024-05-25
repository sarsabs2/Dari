'use client';
import React from 'react';
import ReactPlayer from 'react-player/lazy';

export function ShortsView() {
  return (
    <div className=" rounded-lg h-screen">
      <ReactPlayer
        controls
        height="100%"
        playing
        url="/fakedb/short.mp4"
        width="100%"
      />
    </div>
  );
}
