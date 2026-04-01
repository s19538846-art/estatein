import OurJourney from '@/app/(pages)/about/OurJourney';
import OurValues from './OurValues';
import OurAchievements from './OurAchievements';
import OurProcess from './OurProcess';
import OurTeam from './OurTeam';
import OurClients from './OurClients';
import Footer from '@/app/components/Footer';

export default function AboutUs() {
  return (
    <div>

      <main className="min-h-screen bg-[#141414]">
      
        <OurJourney />
        <OurValues/>
        <OurAchievements/>
        <OurProcess/>
        <OurTeam/>
        <OurClients/>

      </main>


    </div>
  );
}