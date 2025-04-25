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
    'corporate_1.jpg',
    'corporate_2.jpg',
    'corporate_3.jpg',
    'corporate_4.jpg',
    'corporate_5.jpg',
    'corporate_6.jpg',
    'corporate_7.jpg',
    'corporate_8.jpg'
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