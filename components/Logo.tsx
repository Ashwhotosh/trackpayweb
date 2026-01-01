import React, { useState } from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const [error, setError] = useState(false);
  
  const dimensions = {
    sm: 'h-8 w-auto',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-80 md:w-[450px]'
  };

  const isLarge = size === 'xl' || size === 'lg';

  // If the image fails to load, we show a stylized text-based logo
  if (error) {
    return (
      <div className={`flex items-center gap-2 font-black tracking-tighter text-white ${size === 'sm' ? 'text-xl' : 'text-4xl'}`}>
        <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center text-xs">TP</div>
        {size !== 'sm' && <span>TrackPay</span>}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center transition-all duration-700">
      {/* Background glow - only for hero versions */}
      {isLarge && (
        <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full scale-75 animate-pulse"></div>
      )}
      
      <img 
        src="/logo.png" 
        alt="TrackPay Logo" 
        className={`${dimensions[size]} relative z-10 transition-opacity duration-500 ${isLarge ? 'drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]' : ''}`}
        style={{ 
          imageRendering: 'auto',
          maxWidth: '100%'
        }}
        onError={() => setError(true)}
      />
    </div>
  );
};
