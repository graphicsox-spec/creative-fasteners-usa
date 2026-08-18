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
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const hasMultipleSlides = heroSlides.length > 1;
  const activeSlide = heroSlides[activeIndex];
  const showVideo = !reducedMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    video.muted = true;
    if (paused || document.hidden) {
      video.pause();
    } else {
      video.play().catch(() => setPaused(true));
    }
  }, [activeIndex, paused, showVideo]);

  useEffect(() => {
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
      else if (!paused) video.play().catch(() => setPaused(true));
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [paused]);

  const moveSlide = (direction: number) => {
    setActiveIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const handleVideoEnded = () => {
    if (hasMultipleSlides && !paused) moveSlide(1);
  };

  return (
    <section id="home" className="hero" aria-roledescription="carousel" aria-label="Creative Fasteners USA overview">
      <div className="hero__media" aria-hidden="true">
        <img src={activeSlide.poster} alt="" width="1920" height="1080" />
        {showVideo ? (
          <video
            key={activeSlide.video}
            ref={videoRef}
            className="hero__video"
            src={activeSlide.video}
            poster={activeSlide.poster}
            muted
            autoPlay={!paused}
            playsInline
            preload="metadata"
            onEnded={handleVideoEnded}
          />
        ) : null}
      </div>
      <div className="hero__overlay" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__side-label" aria-hidden="true">CF—USA / PRECISION MANUFACTURING</div>

      <div className="hero__content shell">
        <div className={`hero__copy hero__copy--${activeSlide.id}`} key={activeSlide.id} aria-live="polite">
          <p className="hero__eyebrow">
            <span />
            {activeSlide.eyebrow}
          </p>
          <h1>
            {activeSlide.headlineLead && activeSlide.headlineRest ? (
              <>
                <span className="hero__headline-lead">{activeSlide.headlineLead}</span>
                <span className="hero__headline-rest">{activeSlide.headlineRest}</span>
                {activeSlide.headlineFinal ? (
                  <span className="hero__headline-final">{activeSlide.headlineFinal}</span>
                ) : null}
              </>
            ) : activeSlide.headline}
          </h1>
          <p className="hero__description">{activeSlide.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#rfq">
              Request a Quote
            </a>
            <a className="button button--ghost" href="#capabilities">
              Explore Capabilities
            </a>
          </div>
        </div>
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
            <div className="trust-strip__item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
