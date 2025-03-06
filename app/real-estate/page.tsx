'use client';

import ServiceTemplate from '../components/ServiceTemplate';

const RealEstatePage = () => {
  const heroVideoId = '1Y5wr6g-HZw';
  const title = 'REAL ESTATE & DEVELOPMENT';
  const description = 'Our video content is strategically produced to meet the diverse needs of the development, real estate, and construction industries. Industry relevant content that we produce include drone footage, video tours, commercials, testimonials, social media content and much more!';

  const videoIds = [
    'laRGO37yl7g',
    'KjpTgXxvkPc',
    'pjRdI1uH4PA',
    'VzXtHq1TpU8',
    '4ZBVv1BQXrA',
    'pKxP9PRvO6I',
    'ldNx5-ybc_8',
    'VHy_ylc1xwc',
    'pDiYBjUV2NY'
  ];

  const testimonialAuthor = "NATASHA LANGFORD";
  const testimonialCompany = "CK MANN REALTY";
  const testimonialQuote = "I had an incredible experience working with Errantry Studios. They were extremely professional and took my initial concept and elevated it into something far beyond what I had envisioned. Not only did they deliver superior quality but did so in a timely manner.";

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

export default RealEstatePage;