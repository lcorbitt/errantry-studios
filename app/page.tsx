import BrandCarousel from "./components/BrandCarousel";
import HomepageHero from "./components/HomepageHero";
import HomepageVideoServices from "./components/HomepageVideoServices";
import HomepageWhoWeAre from "./components/HomepageWhoWeAre";
import HomepageTestimonial from "./components/HomepageTestimonial";
import HomepageFeaturedVideos from "./components/HomepageFeaturedVideos";
import HomepageBehindTheScenes from "./components/HomepageBehindTheScenes";
import { LazyLoad } from "./components/LazyLoad";
import HomepageProductionReel from "./components/HomepageProductionReel";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <div className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full bg-black">
        <HomepageHero />
        <HomepageVideoServices />

        {/* Lazy loaded components */}
        <LazyLoad>
          <BrandCarousel />
        </LazyLoad>
        <LazyLoad>
          <HomepageWhoWeAre />
        </LazyLoad>
        <LazyLoad>
          <HomepageTestimonial />
        </LazyLoad>
        <LazyLoad>
          <HomepageFeaturedVideos />
        </LazyLoad>
        <LazyLoad>
          <HomepageBehindTheScenes />
        </LazyLoad>
        <LazyLoad>
          <HomepageProductionReel />
        </LazyLoad>
      </div>
    </div>
  );
}
