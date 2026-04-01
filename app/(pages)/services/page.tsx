import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import Footer from '@/app/components/Footer';
import UnlockValue from './UnlockValue';
import PropertyManagement from './PropertyManagement';
import SmartInvestments from './SmartInvestments';

export default function ServicesPage() {
  return (
    <main>

      <ServicesHero />
      <ServicesGrid />
      <UnlockValue />
      <PropertyManagement />
      <SmartInvestments />

    </main>
  );
}
