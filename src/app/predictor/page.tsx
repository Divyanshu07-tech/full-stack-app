'use client';

import { useEffect, useState } from 'react';

export default function PredictorPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">📊 Stock Predictor</h1>

      <div className="w-full max-w-6xl h-[80vh] rounded-2xl shadow-xl border-4 border-blue-500 overflow-hidden bg-white">
        {!isLoaded && (
          <div className="flex items-center justify-center h-full text-blue-700 text-lg font-semibold animate-pulse">
            Loading Predictor...
          </div>
        )}
        <iframe
          src="https://stock-predictor-app-opal.vercel.app/"
          className="w-full h-full"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </main>
  );
}
