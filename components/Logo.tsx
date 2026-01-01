
import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const dimensions = {
    sm: 'h-8 w-auto',
    md: 'w-64',
    lg: 'w-80',
    xl: 'w-[450px]'
  };

  // Only show glow for larger variants to keep the nav clean
  const showGlow = size !== 'sm';

  return (
    <div className="relative flex flex-col items-center justify-center transition-all duration-700">
      {/* Background glow - only for larger versions */}
      {showGlow && (
        <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full scale-75 animate-pulse"></div>
      )}
      
      <img 
        src="logo.png" 
        alt="TrackPay Logo" 
        className={`${dimensions[size]} relative z-10 ${showGlow ? 'drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]' : ''}`}
        style={{ imageRendering: 'auto' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://placehold.co/600x600/0b0b1a/white?text=TP';
        }}
      />
    </div>
  );
};
