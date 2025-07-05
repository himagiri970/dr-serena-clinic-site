import Image from 'next/image';
import { FaStar, FaRegCircleCheck } from 'react-icons/fa6';

import RotatingQuote from '../components/RotatingQuote';
import AboutPage from '../components/about';
import Hero from '@/components/hero';
import Services from '@/components/services';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
     <Hero />
     <AboutPage />
     <Services />
     <FAQ />
      <Contact />
     </>

  );
}

