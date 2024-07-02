'use client'

import BannerWithText from "@/components/BannerWithText";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <div className="mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
        <div className="hero md:mt-6">
          <BannerWithText 
            text="Home" 
            imageUrl={'/rocks.jpeg'} 
          />
        </div>

        <div className="welcome mt-14">
          <h1 className="text-center text-3xl">Welcome!</h1>
          <p className="text-center text-lg">
            Hey there! I’m Todd and I’ve been practicing energy healing for most of my life. 
            Initially, I only offered my services to my family and friends, but now I’m excited to share my energy healing with anyone who needs it! 
            My approach to energy healing involves intuitively clearing energy blockages, which helps your body tap into its amazing healing capabilities. 
            I’m also trained in Reiki and often incorporate its soothing hand positions into my sessions. 
            So if you’re looking for a natural way to promote healing and relaxation, I’d be honoured to help you out!
          </p>
        </div>
        <div className="our-services mt-8">
          <h1 className="text-center text-3xl">Our Services</h1>
          <p className="text-center text-lg">
            We provide a variety of transformative services, including Reiki Healing, Chakra Balancing and Distance Healing Sessions, all aimed at restoring balance, promoting well-being, and nurturing holistic healing.
          </p>
        </div>
      </div>
    </main>
  );
}