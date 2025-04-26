import React from 'react';

const AboutPage = () => {
  return (
    <>
      {/* Founder Section */}
      <section className="relative w-full bg-black py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-black px-4 md:px-8 lg:px-16">
          <div className="w-full h-full flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-white text-2xl md:text-3xl mb-3 md:mb-4 font-bold">MEET THE FOUNDER</h2>
              <h3 className="text-xl md:text-2xl text-cyan-600 font-bold">Brandan Tuck</h3>
              <p className="text-white text-base md:text-lg lg:text-xl mt-8 md:mt-12 lg:mt-16">Errantry Studios was founded by Brandan Tuck, a graduate of Middle Tennessee State University, where he earned his Bachelor&apos;s degree in New Media/Film Studies. Brandan began his career in the corporate sector as the full-time videographer, photographer, and editor for the largest independent real estate brokerage in Middle Tennessee. During this time, he honed his ability to create visually compelling content designed to align with business objectives and deliver results.<br></br><br></br>As the executive producer of Errantry Studios, Brandan leverages his diverse experience to help clients and partners build and elevate their brands. His passion for storytelling, combined with a strategic approach to content creation, allows Errantry Studios to produce media that is both impactful and purpose-driven.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-[300px] md:h-full">
            <img 
              src="/about_1.png" 
              alt="Brandan Tuck" 
              className="w-full h-full object-cover object-top md:object-top"
            />
          </div>
        </div>
      </section>

      {/* Our Focus section */}
      <section className="relative w-full bg-black py-12 md:py-24">
        <div className="max-w-7xl mx-auto bg-black px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex justify-center">
            <h2 className="text-white text-2xl md:text-3xl mb-8 md:mb-12 lg:mb-16 font-bold">OUR FOCUS</h2>
          </div>

          {/* Focus 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
            <div className="w-full h-full flex flex-col gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto pb-8 md:pb-16">
              <div>
                <h3 className="text-lg md:text-xl text-cyan-600 font-bold mb-6 md:mb-8">CORPORATE EXCELLENCE</h3>

                {/* Image */}
                <div className="w-full md:w-3/4 h-48 md:h-64 lg:h-80">
                  <img 
                    src="/about_2.png" 
                    alt="Corporate Excellence" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <p className="text-white text-base md:text-lg mt-4 md:mt-16">The foundation of Errantry Studios was built in the corporate sector, where we have developed a prestigious reputation for excellence in customer service and effective content creation. Our work spans a variety of industries, including real estate, healthcare, and beyond, serving notable clients with a commitment to identifying and solving business challenges through strategic film and media solutions. Our tagline, &quot;Film and Media Solutions&quot;, reflects our dedication to creating content that drives results, whether it&apos;s enhancing brand visibility, engaging target audiences, or supporting marketing campaigns.</p>          
          </div>

          {/* Focus 2 */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
            <div className="w-full h-full flex flex-col gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-16">
              <div>
                <h3 className="text-lg md:text-xl text-cyan-600 font-bold mb-6 md:mb-8">COMMUNITY IMPACT</h3>

                {/* Image */}
                <div className="w-full md:w-3/4 h-48 md:h-64 lg:h-80">
                  <img 
                    src="/about_3.png" 
                    alt="Community Impact" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <p className="text-white text-base md:text-lg mt-4 md:mt-16">Beyond our corporate endeavors, Errantry Studios also serves non-profits and community driven organizations. Our commitment to the community is unwavering, with a particular focus on youth education, cultural awareness, and supporting underserved areas in Nashville, Hendersonville/Sumner County, and more.<br></br><br></br>Errantry Studios is more than just a video production company; we are a partner in your success and a force for positive change. Whether we are creating corporate solutions or engaging with the community, we are true to our mission.</p>          
          </div>

          {/* Focus 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto bg-black mb-8">
            <div className="w-full h-full flex flex-col gap-8 md:gap-12 lg:gap-16">
              <div>
                <h3 className="text-lg md:text-xl text-cyan-600 font-bold mb-6 md:mb-8">CREATIVE CONNECTION</h3>

                {/* Image */}
                <div className="w-full md:w-3/4 h-48 md:h-64 lg:h-80">
                  <img 
                    src="/about_4.png" 
                    alt="Creative Connection" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <p className="text-white text-base md:text-lg mt-4 md:mt-16">With our creative studio department, we are able to provide a space designed specifically for artistic expression and collaboration. We aim to empower artists through our creative services and collaborations, as they pursue their personal and professional endeavors. We consistently and intentionally invest in our creative department and will continue to make the creative community an area of focus moving forward.</p>          
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;