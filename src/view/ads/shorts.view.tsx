'use client';
import React from 'react';
import ReactPlayer from 'react-player/file';

export function ShortsView() {
  return (
    <div className="fixed inset-0">
      <ReactPlayer
        controls
        height="100%"
        muted={true}
        playing
        url="/fakedb/short.mp4"
        width="100%"
      />
    </div>
  );
}
