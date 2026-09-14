

import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react';
import { type Locale } from '../lib/i18n';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Teachers } from '../components/Teachers';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
export const Route = createFileRoute('/')({ component: Home })

export default function Home() {
  const [locale, setLocale] = useState<Locale>('om'); // Afaan Oromoo by default

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Navbar locale={locale} setLocale={setLocale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <About locale={locale} />
        <Features locale={locale} />
        <Teachers locale={locale} />
        <Pricing />
        <Testimonials locale={locale} />
        <FAQ locale={locale} />
      </main>
      <Footer />
    </div>
  );
}