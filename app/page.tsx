import BrandCarousel from "./components/BrandCarousel";
import HomepageHero from "./components/HomepageHero";
import VideoServices from "./components/HomepageVideoServices";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <div className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full">
        <HomepageHero />
        <VideoServices />
        <BrandCarousel />
      </div>
    </div>
  );
}
