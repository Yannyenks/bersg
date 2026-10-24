import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | '4/3' | 'wide';
  caption?: string;
  allowZoom?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'video',
  caption,
  allowZoom = true
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const aspectClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
    wide: 'aspect-[21/9]'
  }[aspectRatio];

  return (
    <>
      <div className={`relative overflow-hidden rounded-xl bg-slate-100 group ${aspectClass} ${className}`}>
        {loading && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <span className="text-xs font-mono text-slate-400">Chargement...</span>
          </div>
        )}

        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 border border-slate-200 text-slate-400 p-4 text-center">
            <ImageIcon className="w-8 h-8 text-[#00B2F6] mb-2" />
            <span className="text-xs font-semibold text-slate-700">{alt}</span>
            <span className="text-[10px] text-slate-500 mt-1">ETS BESRG COMPANY</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        {/* Hover zoom trigger button */}
        {allowZoom && !error && !loading && (
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-md"
            title="Agrandir la photo"
            aria-label="Agrandir la photo"
          >
            <Maximize2 className="w-4 h-4 text-[#00B2F6]" />
          </button>
        )}

        {caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-xs font-medium">
            {caption}
          </div>
        )}
      </div>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-pointer"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-[#00B2F6] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/20"
            />
            <div className="mt-3 text-center text-white text-sm font-medium">
              <span>{alt}</span>
              {caption && <span className="block text-xs text-slate-300 font-normal">{caption}</span>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
