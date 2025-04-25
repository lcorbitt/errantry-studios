'use client';

import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import type { YouTubePlayer } from 'react-youtube';

const videos = [
  { id: 'CYxBaUQpn-U', title: 'Video 1' },
  { id: 'pKxP9PRvO6I', title: 'Video 2' },
  { id: 'rGQ6VwnShqI', title: 'Video 3' },
  { id: 'y5oCBh4TDNU', title: 'Video 4' },
  { id: 'TJtlFxyjJc4', title: 'Video 5' },
  { id: 'pjRdI1uH4PA', title: 'Video 6' },
  { id: 'ISnoj4CnefI', title: 'Video 7' },
  { id: 'TFyp2tG_qUg', title: 'Video 8' },
  { id: 'VHy_ylc1xwc', title: 'Video 9' },
];

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

const VideoModal = ({ 
  videoId, 
  onClose 
}: { 
  videoId: string | null;
  onClose: () => void;
}) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4 md:px-8 lg:px-16">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-cyan-500 transition-colors cursor-pointer"
      >
        <svg 
          className="w-6 h-6 md:w-8 md:h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      {/* Video container */}
      <div className="w-full max-w-5xl aspect-video">
        <YouTube 
          videoId={videoId} 
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              controls: 1,
            },
          }}
          className="w-full h-full"
          iframeClassName="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

const HomepageFeaturedVideos = () => {
  const playerRefs = useRef<{ [key: number]: YouTubePlayer }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if we're on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 640); // sm breakpoint
      if (window.innerWidth >= 640) {
        setShowAllVideos(true);
      }
    };

    // Initial check
    checkDesktop();

    // Add event listener for resize
    window.addEventListener('resize', checkDesktop);

    // Cleanup
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

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
    event.target.cueVideoById(videos[index].id);
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  // Get the videos to display based on screen size
  const displayedVideos = isDesktop || showAllVideos ? videos : videos.slice(0, 3);

  return (
    <>
      <section className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
            FEATURED VIDEOS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {displayedVideos.map((video, index) => (
              <div 
                key={index} 
                className="aspect-video relative cursor-pointer group overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleVideoClick(video.id)}
              >
                <YouTube 
                  videoId={video.id} 
                  opts={{
                    ...opts,
                    playerVars: {
                      ...opts.playerVars,
                      playlist: video.id,
                    }
                  }}
                  onReady={(event) => onReady(event, index)}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                />
                <ThumbnailOverlay 
                  videoId={video.id} 
                  isHovered={hoveredIndex === index}
                />
                {hoveredIndex !== index && <PlayButton />}
              </div>
            ))}
          </div>

          {/* Show More/Less Button - Only visible on mobile */}
          {!isDesktop && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg text-lg uppercase transition-all duration-500 hover:bg-black hover:text-cyan-600 border border-cyan-600"
              >
                {showAllVideos ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <VideoModal 
        videoId={selectedVideoId} 
        onClose={handleCloseModal}
      />
    </>
  );
};

export default HomepageFeaturedVideos;