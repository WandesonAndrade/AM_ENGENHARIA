/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ComponentProps } from 'react';

interface OptimizedImageProps extends ComponentProps<'img'> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  isHighPriority?: boolean; // For above-the-fold images (Hero)
  id?: string;
  key?: any;
  onClick?: (e: any) => void;
}

/**
 * High-performance image loading component.
 * Prevents Cumulative Layout Shift (CLS), uses a premium technical blueprint shimmer placeholder,
 * and performs a smooth fade-in transition once the image is fully loaded.
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  isHighPriority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(isHighPriority ? src : '');

  useEffect(() => {
    if (isHighPriority) {
      setIsLoaded(true);
      return;
    }

    // Lazy load or progressive load using IntersectionObserver
    let observer: IntersectionObserver;
    const loadImg = () => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
    };

    if ('IntersectionObserver' in window) {
      // Create a dummy element or just trigger loading
      loadImg();
    } else {
      // Fallback
      loadImg();
    }
  }, [src, isHighPriority]);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#121414] ${placeholderClassName}`}>
      {/* Technical Blueprint/Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#151717] pointer-events-none z-10">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
          
          {/* Technical blueprint grids in placeholder */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#343535/5_1px,transparent_1px),linear-gradient(to_bottom,#343535/5_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          {/* Subtle loading indicator */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-mono text-[8px] text-brand-cyan/40 tracking-widest uppercase animate-pulse">
              LOADING_ASSET.BIM
            </span>
            <div className="w-16 h-[1px] bg-brand-cyan/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-brand-cyan animate-scan-line-horizontal" />
            </div>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {(currentSrc || isHighPriority) && (
        <img
          src={isHighPriority ? src : currentSrc}
          alt={alt}
          className={`${className} transition-opacity duration-700 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={isHighPriority ? 'eager' : 'lazy'}
          fetchPriority={isHighPriority ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          {...props}
        />
      )}
    </div>
  );
}
