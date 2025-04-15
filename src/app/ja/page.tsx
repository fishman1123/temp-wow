'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// アイコン
import { SparklesIcon, PhotoIcon, BeakerIcon, ArrowRightIcon, PlayCircleIcon, GiftIcon } from '@heroicons/react/24/outline';

// Three.js 背景
import dynamic from 'next/dynamic';

const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  // 状態管理
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // アプリのロード表示
    setIsAppLoaded(true);
    
    // 背景ロードの遅延時間を短縮
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);
    
    return () => {
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <>
      {/* 背景はアプリが完全に読み込まれた後にのみ表示 */}
      {isAppLoaded && showBackground && <DreamyBackground />}

      {/* メインコンテナ */}
      <main className="min-h-screen text-slate-700 font-sans relative z-10">
        {/* ヒーローセクション */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            {/* イベントヘッダー */}
            <div className="text-center mb-12 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-slate-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AC'SCENT WOW</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
                AIがあなたの画像タイプと合う香水を見つけます
              </p>

              <Link href="/ja/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <SparklesIcon className="w-5 h-5" />
                分析を始める
              </Link>
            </div>

            {/* メインコンテンツ */}
            <div className="max-w-4xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 border border-white/50">
                {/* 右側: イベント説明 */}
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                    IMAGE ANALYZER
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    写真をアップロードして、AIが分析したイメージタイプとそれに合う特別な香水を推薦します。
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-sky-50/60 rounded-lg border border-sky-100/80">
                      <div className="p-2.5 rounded-full bg-sky-100 text-sky-600 flex-shrink-0 mt-0.5">
                        <PhotoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">イメージタイプ分析</h3>
                        <p className="text-slate-500 text-sm">アップロードした写真をもとにイメージタイプを分析します。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50/60 rounded-lg border border-blue-100/80">
                      <div className="p-2.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                        <BeakerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">香水のおすすめ</h3>
                        <p className="text-slate-500 text-sm">分析されたタイプに最も合う香水をおすすめします。</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/ja/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
                    <PlayCircleIcon className="w-5 h-5 text-sky-500" />
                    今すぐ分析する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 参加方法セクション */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white/30 to-sky-50/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 mb-3">
                参加方法
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto">
                簡単な3ステップで香りを探す旅に参加しましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: PhotoIcon, title: '1. 写真をアップロード', description: 'お気に入りの写真を選びます。', color: 'sky' },
                { icon: SparklesIcon, title: '2. AI分析', description: 'AIが写真の特徴と雰囲気を分析します。', color: 'blue' },
                { icon: GiftIcon, title: '3. 結果を確認', description: '分析結果とおすすめの香水を確認します。', color: 'indigo' }
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
               <Link href="/ja/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <ArrowRightIcon className="w-5 h-5" />
                分析を始める
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 