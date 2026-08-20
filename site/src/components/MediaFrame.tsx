type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  poster?: string;
};

export function MediaFrame({ src, alt, className = '', priority = false, poster }: MediaFrameProps) {
  const isVideo = /\.mp4$/i.test(src);
  return (
    <div className={`media-frame ${className}`}>
      {isVideo ? (
        <video muted loop playsInline preload="metadata" poster={poster} aria-label={alt}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      )}
    </div>
  );
}
