'use client';

import ServiceTemplate from '../components/ServiceTemplate';

const CreativeStudioPage = () => {
  const heroVideoId = 'xR2mftY_TgM';
  const title = 'CREATIVE STUDIO';
  const description = "Our in-house production studio provides a variety of services for clients, including talking headshots, social media content, headshots, product videos/photos, and more! Furthermore, our studio also houses our creative department. Offering hourly, daily, and monthly studio rentals. It's designed specifically for creative collaboration and is perfect for photoshoots, video shoots, podcasts, and more!"

  const videoIds = [
    'ZuSX4hT9lFk',
    'y5oCBh4TDNU',
    'OnZoAG4OEn0'
  ];

  const photoIds = [
    'studio_1.png',
    'studio_2.png',
    'studio_3.png',
    'studio_4.png',
    'studio_5.png',
    'studio_6.png',
    'studio_7.png',
    'studio_8.png'
  ];

  const testimonialAuthor = "TROY SMITH";
  const testimonialCompany = "CONTENT CREATOR";
  const testimonialQuote = "Very professional and reasonably priced! I would totally recommend to anyone. The studio was very accommodating and customizable to your liking. More importantly, the turnaround time on projects were fast!";

  return (
    <div className="min-h-screen bg-black text-white">
      <ServiceTemplate
        heroVideoId={heroVideoId}
        title={title}
        description={description}
        videoIds={videoIds}
        photoIds={photoIds}
        testimonialAuthor={testimonialAuthor}
        testimonialCompany={testimonialCompany}
        testimonialQuote={testimonialQuote} 
      />
    </div>
  );
};

export default CreativeStudioPage;