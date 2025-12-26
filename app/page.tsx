import HeroSection from "@/components/hero-section"
import CoupleStorySection from "@/components/couple-story-section"
import EventDetailsSection from "@/components/event-details-section"
import LocationSection from "@/components/location-section"
import GallerySection from "@/components/gallery-section"
import GreetingsSection from "@/components/greetings-section"
import GivingSection from "@/components/giving-section"
import FooterSection from "@/components/footer-section"
import AudioPlayer from "@/components/audio-player"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <AudioPlayer audioUrl={"/music/romantic-axophone.mp3"} autoPlay={true} />
      <HeroSection />
      <CoupleStorySection />
      <EventDetailsSection />
      <LocationSection />
      <GallerySection />
      <GreetingsSection />
      <GivingSection />
      <FooterSection />
    </main>
  )
}
