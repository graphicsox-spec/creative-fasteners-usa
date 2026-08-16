import { useState, type ReactNode } from 'react';
import { capabilities, type CapabilityIcon as CapabilityIconName } from '../../content/homepage';

function CapabilityIcon({ name }: { name: CapabilityIconName }) {
  const paths: Record<CapabilityIconName, ReactNode> = {
    forming: <><path d="M7 8h10v8H7z" /><path d="M4 4h4v4M20 4h-4v4M4 20h4v-4M20 20h-4v-4" /></>,
    threading: <><path d="M5 7h14M5 11h14M5 15h14M5 19h14" /><path d="M8 4v16M16 4v16" /></>,
    drilling: <><path d="M12 3v8" /><path d="M8 11h8l-4 10z" /><path d="M5 5h14" /></>,
    heat: <>
      <path d="M4 3h16v18H4zM4 8h16" />
      <path d="M7 11h10v7H7z" />
      <path d="M9.5 16c0-1 .8-1.35.8-2.35 0-.6-.25-1.05-.55-1.45M12 16c0-1 .8-1.35.8-2.35 0-.6-.25-1.05-.55-1.45M14.5 16c0-1 .8-1.35.8-2.35 0-.6-.25-1.05-.55-1.45" />
      <path d="M7 21v1M17 21v1M17 5.5h1" />
    </>,
    passivation: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="M9 12l2 2 4-5" /></>,
    finishes: <><path d="M4 16l8-12 8 12" /><path d="M6 16h12v4H6z" /><path d="M9 12h6" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function CapabilityConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = capabilities[activeIndex];

  return (
    <div className="capability-console">
      <div className="capability-console__rail" aria-hidden="true">
        <span>Process selector</span>
        <span>06 capability reviews</span>
        <span>Drawing-led evaluation</span>
      </div>

      <div className="capability-console__body">
        <div className="capability-console__menu" role="tablist" aria-label="Manufacturing capabilities">
          {capabilities.map((capability, index) => {
            const selected = index === activeIndex;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="capability-detail"
                className={selected ? 'is-active' : ''}
                key={capability.number}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{capability.number}</span>
                <strong>{capability.title}</strong>
                <i aria-hidden="true">↗</i>
              </button>
            );
          })}
        </div>

        <article
          className="capability-console__stage"
          id="capability-detail"
          role="tabpanel"
          aria-live="polite"
        >
          <div className="capability-console__grid" aria-hidden="true" />
          <div className="capability-console__stage-head">
            <span className="capability-console__number">{activeCapability.number}<small>/06</small></span>
            <div className="capability-console__icon">
              <CapabilityIcon name={activeCapability.icon} />
            </div>
          </div>

          <div className="capability-console__copy" key={activeCapability.number}>
            <span>Selected process review</span>
            <h3>{activeCapability.title}</h3>
            <p>{activeCapability.description}</p>
          </div>

          <div className="capability-console__status" aria-hidden="true">
            <span><i />Specification input required</span>
            <strong>CF—USA / PROCESS {activeCapability.number}</strong>
          </div>
        </article>
      </div>
    </div>
  );
}
