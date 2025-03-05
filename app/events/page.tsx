'use client';

import ServiceTemplate from '../components/ServiceTemplate';
import Testimonial from '../components/Testimonial';

const EventPage = () => {
  const heroVideoId = 'TJtlFxyjJc4';
  const title = 'EVENT VIDEOS';
  const description = 'We provide video production, live streaming, and additional services on an hourly or daily basis for various events such as conferences, fundraising events, networking events, athletic events, and more. Capturing event video is an excellent way to enhance brand awareness , promote business initiatives, and raise campaign funds!';

  const videoIds = [
    'CYxBaUQpn-U',
    '4nv-MH69hxQ',
    'TJtlFxyjJc4',
    'XJkVP-51bjs',
    'F_UzBH7ZOYI',
    'fGwS0MrVMfs',
    'q-DEydW7tPE',
    'vPn-oxkf_w4',
    'c0shtTbaHZs',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ServiceTemplate heroVideoId={heroVideoId} title={title} videoIds={videoIds} description={description} />
      <Testimonial
        author="Kaymi Butler"
        company="Black Lemonade"
        quote="We've found Errantry Studios to be absolutely invaluable in helping us communicate effectively with our donors, partners, and community members. We are incredibly grateful for their unwavering consistency in bringing our nonprofit's story to life in such a powerful and meaningful way."
      />
    </div>
  );
};

export default EventPage;