'use client';

import ServiceTemplate from '../components/ServiceTemplate';

const AerialPage = () => {
  const heroVideoId = 'xR2mftY_TgM';
  const title = 'AERIAL CONTENT';
  const description = 'We provide high-quality drone services available as an hourly or daily add-on for events, commercial, Television film productions and more. Additionally, this service can function independently for industries such as real estate, development, construction, and more!';

  const videoIds = [
    'pKS4bT-08S0',
    'Gcdy_MzYoaw',
    'pZ2y-tzMOEc',
    'VbxvT855T0Q',
    '_WiQhHIBnFM',
    '1rpPkk7jPyk'
  ];

  const testimonialAuthor = "JOHN GLENN";
  const testimonialCompany = "MAGNOLIA LUXURY LANDSCAPES";
  const testimonialQuote = "Errantry Studios is my go to for everything digital content related. From filming and editing to drone work and audio, they handle it all with a high level of professionalism and creativity.";

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

export default AerialPage;