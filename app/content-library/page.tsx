'use client';

import ServiceTemplate from '../components/ServiceTemplate';

const ContentLibraryPage = () => {
  const heroVideoId = 'xR2mftY_TgM';
  const title = 'CONTENT LIBRARY';
  const description = 'Our Content Library package is an hourly-based service for creating short-form video and social media content. The goal is to produce a comprehensive collection of brand-relevant material. Clients can then utilize this content as-needed for their marketing and social media efforts.';

  const videoIds = [
    'xR2mftY_TgM',
    'Gcdy_MzYoaw',
    'pZ2y-tzMOEc',
    'VbxvT855T0Q',
    '_WiQhHIBnFM',
    '1rpPkk7jPyk'
  ];

  const testimonialAuthor = "KENNY BENNETT";
  const testimonialCompany = "TRAIN 36XTY";
  const testimonialQuote = "They are punctual, professional, detail oriented; and more importantly fun to work with. We love the fast turnaround times and the high-quality productions. They have played an integral part in all of our product and service campaigns. We will continue using their services.";

  return (
    <div className="min-h-screen bg-black text-white">
      <ServiceTemplate
        heroVideoId={heroVideoId}
        title={title}
        description={description}
        videoIds={videoIds}
        testimonialAuthor={testimonialAuthor}
        testimonialCompany={testimonialCompany}
        testimonialQuote={testimonialQuote} 
      />
    </div>
  );
};

export default ContentLibraryPage;