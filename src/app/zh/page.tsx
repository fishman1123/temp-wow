'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 图标
import { SparklesIcon, PhotoIcon, BeakerIcon, ArrowRightIcon, PlayCircleIcon, GiftIcon } from '@heroicons/react/24/outline';

// Three.js 背景
import dynamic from 'next/dynamic';

const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  // 状态管理
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // 应用加载显示
    setIsAppLoaded(true);
    
    // 减少背景加载延迟时间
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);
    
    return () => {
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <>
      {/* 背景仅在应用完全加载后显示 */}
      {isAppLoaded && showBackground && <DreamyBackground />}

      {/* 主容器 */}
      <main className="min-h-screen text-slate-700 font-sans relative z-10">
        {/* 英雄部分 */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            {/* 活动标题 */}
            <div className="text-center mb-12 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-slate-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AC'SCENT WOW</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
                AI将为您找到适合的图像类型和匹配的香水
              </p>

              <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <SparklesIcon className="w-5 h-5" />
                开始分析
              </Link>
            </div>

            {/* 主要内容 */}
            <div className="max-w-4xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 border border-white/50">
                {/* 右侧: 活动说明 */}
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                    IMAGE ANALYZER
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    上传您的照片，获取AI分析的图像类型和适合的香水推荐。
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-sky-50/60 rounded-lg border border-sky-100/80">
                      <div className="p-2.5 rounded-full bg-sky-100 text-sky-600 flex-shrink-0 mt-0.5">
                        <PhotoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">图像类型分析</h3>
                        <p className="text-slate-500 text-sm">根据上传的照片分析图像类型。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50/60 rounded-lg border border-blue-100/80">
                      <div className="p-2.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                        <BeakerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">香水推荐</h3>
                        <p className="text-slate-500 text-sm">为分析出的类型推荐最适合的香水。</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
                    <PlayCircleIcon className="w-5 h-5 text-sky-500" />
                     立即开始分析
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 参与方式部分 */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white/30 to-sky-50/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 mb-3">
                参与方式
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto">
                通过简单的3个步骤参与探索香气的旅程。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: PhotoIcon, title: '1. 上传照片', description: '选择您喜欢的照片。', color: 'sky' },
                { icon: SparklesIcon, title: '2. AI分析', description: 'AI分析照片的特征和氛围。', color: 'blue' },
                { icon: GiftIcon, title: '3. 查看结果', description: '查看分析结果和推荐的香水。', color: 'indigo' }
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
               <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <ArrowRightIcon className="w-5 h-5" />
                开始分析
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 