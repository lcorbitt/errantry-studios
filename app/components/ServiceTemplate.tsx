'use client';

import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import type { YouTubePlayer } from 'react-youtube';
import { LazyLoad } from './LazyLoad';
import Link from 'next/link';
import Testimonial from './Testimonial';

interface ServiceTemplateProps {
  heroVideoId: string;
  title: string;
  description: string;
  videoIds?: string[];
  testimonialAuthor: string;
  testimonialCompany: string;
  testimonialQuote: string;
  photoIds?: string[];
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

const VideoModal = ({ 
  videoId, 
  onClose 
}: { 
  videoId: string | null;
  onClose: () => void;
}) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-cyan-500 transition-colors cursor-pointer"
      >
        <svg 
          className="w-8 h-8" 
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
          iframeClassName="w-full h-full"
        />
      </div>
    </div>
  );
};

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ heroVideoId, title, description, videoIds, photoIds, testimonialAuthor, testimonialCompany, testimonialQuote }) => {
  const playerRefs = useRef<{ [key: number]: YouTubePlayer }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

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
    if (videoIds) {
      event.target.cueVideoById(videoIds[index]);
    }
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto pt-16">
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
          <div className="flex-1 grid grid-cols-1 gap-4">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>

            <p className="text-black">
              {description}
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-2 rounded-lg text-xl uppercase transition-all duration-500 w-fit hover:bg-white hover:text-cyan-600 border border-cyan-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {videoIds && (
          <LazyLoad>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {videoIds.map((videoId, index) => (
              <div 
                key={index} 
                className="aspect-video relative cursor-pointer group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleVideoClick(videoId)}
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
        )}
      </div>

      <div className="max-w-6xl mx-auto py-8">
        <Testimonial
          author={testimonialAuthor}
          company={testimonialCompany}
          quote={testimonialQuote}
        />
      </div>

      {photoIds && (
        <LazyLoad>
          <div className="max-w-6xl mx-auto pb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {photoIds.map((photoId, index) => (
                <div key={index} className="aspect-square bg-gray-200 relative overflow-hidden group">
                  <img 
                    src={`/${photoId}`}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </LazyLoad>
      )}

      {/* Modal */}
      <VideoModal 
        videoId={selectedVideoId} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ServiceTemplate;