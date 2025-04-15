'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Icons
import { SparklesIcon, PhotoIcon, BeakerIcon, ArrowRightIcon, PlayCircleIcon, GiftIcon } from '@heroicons/react/24/outline';

// Three.js background
import dynamic from 'next/dynamic';

// Load background component later
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  // State management
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Mark app as loaded
    setIsAppLoaded(true);
    
    // Reduce background loading delay
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);
    
    return () => {
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <>
      {/* Only show background after app is fully loaded */}
      {isAppLoaded && showBackground && <DreamyBackground />}

      {/* Main container */}
      <main className="min-h-screen text-slate-700 font-sans relative z-10">
        {/* Hero section */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            {/* Event header */}
            <div className="text-center mb-12 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-slate-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AC'SCENT WOW</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
                AI will find image types and matching perfumes for you
              </p>

              <Link href="/en/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <SparklesIcon className="w-5 h-5" />
                Start Analysis
              </Link>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 border border-white/50">
                {/* Right: Event description */}
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                    IMAGE ANALYZER
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Upload your photo and get AI recommendations for image types and matching perfumes.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-sky-50/60 rounded-lg border border-sky-100/80">
                      <div className="p-2.5 rounded-full bg-sky-100 text-sky-600 flex-shrink-0 mt-0.5">
                        <PhotoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">Image Type Analysis</h3>
                        <p className="text-slate-500 text-sm">Analyze your image type based on your uploaded photo.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50/60 rounded-lg border border-blue-100/80">
                      <div className="p-2.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                        <BeakerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">Custom Perfume Recommendation</h3>
                        <p className="text-slate-500 text-sm">We recommend the perfume that best matches the analyzed type.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/en/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
                    <PlayCircleIcon className="w-5 h-5 text-sky-500" />
                     Start Analysis Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to participate section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white/30 to-sky-50/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 mb-3">
                How to Participate
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto">
                Join the journey to find your fragrance in 3 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: PhotoIcon, title: '1. Upload Photo', description: 'Select your favorite photo.', color: 'sky' },
                { icon: SparklesIcon, title: '2. AI Analysis', description: 'AI analyzes the features and mood of the photo.', color: 'blue' },
                { icon: GiftIcon, title: '3. Check Results', description: 'Check the analysis results and recommended perfume.', color: 'indigo' }
              ].map((step, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/60 p-6 text-center transform hover:-translate-y-1.5 transition-transform duration-300 ease-in-out animate-fade-in-slow" style={{ animationDelay: `${0.7 + index * 0.15}s` }}>
                  {step.color === 'sky' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-5 shadow-inner border border-sky-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  {step.color === 'blue' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-5 shadow-inner border border-blue-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  {step.color === 'indigo' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-5 shadow-inner border border-indigo-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 animate-fade-in-slow" style={{ animationDelay: '1.2s' }}>
               <Link href="/en/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <ArrowRightIcon className="w-5 h-5" />
                Start Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 