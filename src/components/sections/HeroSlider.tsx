import { useEffect, useRef, useState } from 'react';
import { heroSlides, trustItems } from '../../content/homepage';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

function PlaybackIcon({ paused }: { paused: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paused ? <path d="M8 5v14l11-7z" /> : <path d="M6 5h3.5v14H6zm8.5 0H18v14h-3.5z" />}
    </svg>
  );
}

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trustIndex, setTrustIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reducedMotion = useReducedMotion();
  const hasMultipleSlides = heroSlides.length > 1;
  const showVideo = !reducedMotion;

  useEffect(() => {
    const timer = setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Play active video and smoothly pause non-active videos after cinematic crossfade
  useEffect(() => {
    if (!showVideo) return;

    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.muted = true;
      if (paused || document.hidden) {
        currentVideo.pause();
      } else {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(() => setPaused(true));
      }
    }

    // Keep non-active videos running during the 1.2s crossfade transition, then pause them
    const pauseTimeout = setTimeout(() => {
      videoRefs.current.forEach((vid, idx) => {
        if (idx !== activeIndex && vid) {
          vid.pause();
        }
      });
    }, 1200);

    return () => clearTimeout(pauseTimeout);
  }, [activeIndex, paused, showVideo]);

  // Handle visibility changes (browser tab switch)
  useEffect(() => {
    const handleVisibility = () => {
      const currentVideo = videoRefs.current[activeIndex];
      if (!currentVideo || !showVideo) return;
      if (document.hidden) {
        currentVideo.pause();
      } else if (!paused) {
        currentVideo.play().catch(() => setPaused(true));
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [activeIndex, paused, showVideo]);

  const moveSlide = (direction: number) => {
    setActiveIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const handleVideoEnded = () => {
    if (hasMultipleSlides && !paused) moveSlide(1);
  };

  return (
    <section id="home" className="hero" aria-roledescription="carousel" aria-label="Creative Fasteners USA overview">
      <div className="hero__media" aria-hidden="true">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`hero__slide-media ${isActive ? 'is-active' : ''}`}
            >
              {showVideo ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="hero__video"
                  src={slide.video}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => {
                    if (index === activeIndex) handleVideoEnded();
                  }}
                />
              ) : (
                <img src={slide.poster} alt="" width="1920" height="1080" />
              )}
            </div>
          );
        })}
      </div>
      <div className="hero__overlay" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__side-label" aria-hidden="true">CF—USA / PRECISION MANUFACTURING</div>

      <div className="hero__content shell">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`hero__copy hero__copy--${slide.id} ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
              aria-live={isActive ? 'polite' : 'off'}
            >
              <p className="hero__eyebrow">
                <span />
                {slide.eyebrow}
              </p>
              <h1>
                {slide.headlineLead && slide.headlineRest ? (
                  <>
                    <span className="hero__headline-lead">{slide.headlineLead}</span>
                    <span className="hero__headline-rest">{slide.headlineRest}</span>
                    {slide.headlineFinal ? (
                      <span className="hero__headline-final">{slide.headlineFinal}</span>
                    ) : null}
                  </>
                ) : slide.headline}
              </h1>
              <p className="hero__description">{slide.description}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#rfq">
                  Request a Quote
                </a>
                <a className="button button--ghost" href="#capabilities">
                  Explore Capabilities
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero__controls shell">
        {hasMultipleSlides ? (
          <>
            <div className="hero__arrows">
              <button type="button" onClick={() => moveSlide(-1)} aria-label="Show previous hero slide">
                <ArrowIcon direction="left" />
              </button>
              <button type="button" onClick={() => moveSlide(1)} aria-label="Show next hero slide">
                <ArrowIcon direction="right" />
              </button>
            </div>
            <div className="hero__pagination" aria-label="Select hero slide">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={index === activeIndex ? 'is-active' : ''}
                  aria-label={`Show slide ${index + 1} of ${heroSlides.length}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <span />
                </button>
              ))}
            </div>
            <div className="hero__count" aria-hidden="true">
              <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
              <span>/</span>
              <span>{String(heroSlides.length).padStart(2, '0')}</span>
            </div>
          </>
        ) : null}
        {showVideo ? (
          <button
            className="hero__playback"
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? 'Play background video' : 'Pause background video'}
          >
            <PlaybackIcon paused={paused} />
            <span>{paused ? 'Play film' : 'Pause film'}</span>
          </button>
        ) : null}
      </div>

      <div className="trust-strip" aria-label="Service principles">
        <div className="trust-strip__inner shell">
          {trustItems.map((item, index) => (
            <div
              className={`trust-strip__item ${index === trustIndex ? 'is-active' : ''}`}
              key={item}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
