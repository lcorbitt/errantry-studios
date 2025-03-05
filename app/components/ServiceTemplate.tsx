'use client';

import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import type { YouTubePlayer } from 'react-youtube';
import { LazyLoad } from './LazyLoad';

interface ServiceTemplateProps {
  heroVideoId: string;
  title: string;
  description: string;
  videoIds: string[];
}

const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:opacity-0">
    <div className="bg-cyan-600 rounded-full p-2">
      <svg 
        className="w-8 h-8 text-white" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
  </div>
);

const ThumbnailOverlay = ({ videoId, isHovered }: { videoId: string, isHovered: boolean }) => (
  <div 
    className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
    style={{
      backgroundImage: `url(https://img.youtube.com/vi/${videoId}/sddefault.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
);

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ heroVideoId, title, description, videoIds }) => {
  const playerRefs = useRef<{ [key: number]: YouTubePlayer }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      modestbranding: 1,
      rel: 0,
      mute: 1,
      playsinline: 1,
      controls: 0,
      showinfo: 0,
      iv_load_policy: 3,
      playlist: '',
      loop: 1,
      enablejsapi: 1,
      autoplay: 0,
    },
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const player = playerRefs.current[index];
    if (player) {
      player.playVideo();
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const player = playerRefs.current[index];
    if (player) {
      player.pauseVideo();
    }
  };

  const onReady = (event: { target: YouTubePlayer }, index: number) => {
    playerRefs.current[index] = event.target;
    event.target.cueVideoById(videoIds[index]);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto py-16">
        <div className="flex items-center mb-16">
          {/* YouTube Video Section */}
          <div className="flex-1 h-72">
            <iframe
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${heroVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Vertical Cyan Line */}
          <div className="w-0.5 bg-cyan-600 h-64 mx-8"></div>

          {/* Title and Paragraph Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-black">
              {description}
            </p>
          </div>
        </div>

        {/* Lazy Loaded Video Grid Section */}
        <LazyLoad>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {videoIds.map((videoId, index) => (
              <div 
                key={index} 
                className="aspect-video relative cursor-pointer group h-52"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <YouTube 
                  videoId={videoId} 
                  opts={{
                    ...opts,
                    playerVars: {
                      ...opts.playerVars,
                      playlist: videoId,
                    }
                  }}
                  onReady={(event) => onReady(event, index)}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                />
                <ThumbnailOverlay 
                  videoId={videoId} 
                  isHovered={hoveredIndex === index}
                />
                {hoveredIndex !== index && <PlayButton />}
              </div>
            ))}
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default ServiceTemplate;