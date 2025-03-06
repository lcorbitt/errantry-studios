'use client';

import ServiceTemplate from '../components/ServiceTemplate';

const CorporatePage = () => {
  const heroVideoId = 'kRwkX23Ask8';
  const title = 'CORPORATE VIDEO';
  const description = 'At Errantry Studios, we provide comprehensive corporate video services that span from pre-production to post-production. With our marketing expertise and results-oriented approach, we enhance the chances of our clients achieving a return on their investment. Our corporate production offerings include commercials, advertisements, event videos, recruitment videos, product demos, testimonials, and much more!'

  const videoIds = [
    'ZuSX4hT9lFk',
    'OVLpLlO8Ngw',
    'WWLFK9pxX4o',
    'ISnoj4CnefI',
    '6tqusB8Z57o',
    'mjYplIpaeps'
  ];

  const photoIds = [
    'corporate_1.png',
    'corporate_2.png',
    'corporate_3.png',
    'corporate_4.png',
    'corporate_5.png',
    'corporate_6.png',
    'corporate_7.png',
    'corporate_8.png'
  ];

  const testimonialAuthor = "FRED MCGINNIS";
  const testimonialCompany = "REAL ESTATE ENTREPRENEUR";
  const testimonialQuote = "Errantry Studios is truly exceptional when it comes to video. Their team is not only incredibly skilled but also highly professional and prompt. They work efficiently without compromising quality, always meeting deadlines and exceeding expectations.";

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

export default CorporatePage;