import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      {/* Founder s */}
      <section className="relative w-full bg-white py-16 px-16">
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto bg-black">
          <div className="w-full h-full flex flex-col gap-16 p-16">
            <div>
              <h2 className="text-white text-3xl mb-4 font-bold">MEET THE FOUNDER</h2>
              <h3 className="text-2xl text-cyan-600 font-bold">Brandan Tuck</h3>
              <p className="text-white text-xl mt-16">Errantry Studios was founded by Brandan Tuck, a graduate of Middle Tennessee State University, where he earned his Bachelor's degree in New Media/Film Studies. Brandan began his career in the corporate sector as the full-time videographer, photographer, and editor for the largest independent real estate brokerage in Middle Tennessee. During this time, he honed his ability to create visually compelling content designed to align with business objectives and deliver results.<br></br><br></br>As the executive producer of Errantry Studios, Brandan leverages his diverse experience to help clients and partners build and elevate their brands. His passion for storytelling, combined with a strategic approach to content creation, allows Errantry Studios to produce media that is both impactful and purpose-driven.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-full">
            <img 
              src="/about_1.png" 
              alt="Brandan Tuck" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Our Focus section */}
      <section className="relative w-full bg-black py-16 px-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <h2 className="text-white text-3xl mb-16 font-bold">OUR FOCUS</h2>
        </div>

        {/* Focus 1 */}
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
          <div className="w-full h-full flex flex-col gap-16 px-32 pb-16">
            <div>
              <h3 className="text-2xl text-cyan-600 font-bold mb-8">CORPORATE EXCELLENCE</h3>

              {/* Image */}
              <div className="w-3/4 h-80">
                <img 
                  src="/about_2.png" 
                  alt="Brandan Tuck" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <p className="text-white text-lg mt-16">The foundation of Errantry Studios was built in the corporate sector, where we have developed a prestigious reputation for excellence in customer service and effective content creation. Our work spans a variety of industries, including real estate, healthcare, and beyond, serving notable clients with a commitment to identifying and solving business challenges through strategic film and media solutions. Our tagline, “Film and Media Solutions”, reflects our dedication to creating content that drives results, whether it’s enhancing brand visibility, engaging target audiences, or supporting marketing campaigns.</p>          
        </div>

        {/* Focus 2 */} 
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
          <div className="w-full h-full flex flex-col gap-16 px-32 pb-16">
            <div>
              <h3 className="text-2xl text-cyan-600 font-bold mb-8">COMMUNITY IMPACT</h3>

              {/* Image */}
              <div className="w-3/4 h-80">
                <img 
                  src="/about_3.png" 
                  alt="Brandan Tuck" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <p className="text-white text-lg mt-16">Beyond our corporate endeavors, Errantry Studios also serves non-profits and community driven organizations. Our commitment to the community is unwavering, with a particular focus on youth education, cultural awareness, and supporting underserved areas in Nashville, Hendersonville/Sumner County, and more.<br></br><br></br>Errantry Studios is more than just a video production  company; we are a partner in your success and a force for positive change. Whether we are creating corporate solutions or engaging with the community,  we are true to our mission.</p>          
        </div>

        {/* Focus 3 */}
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
          <div className="w-full h-full flex flex-col gap-16 px-32">
            <div>
              <h3 className="text-2xl text-cyan-600 font-bold mb-8">CREATIVE CONNECTION</h3>

              {/* Image */}
              <div className="w-3/4 h-80">
                <img 
                  src="/about_4.png" 
                  alt="Brandan Tuck" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <p className="text-white text-lg mt-16">With our creative studio department, we are able to provide a space designed specifically for artistic expression and collaboration. We aim to empower artists through our creative services and collaborations, as they pursue their personal and professional endeavors. We consistently and intentionally invest in our creative department and will continue to make the creative community an area of focus moving forward.</p>          
        </div>
      </section>
    </>
  );
};

export default AboutPage;