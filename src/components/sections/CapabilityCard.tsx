import type { ReactNode } from 'react';
import type { CapabilityIcon as CapabilityIconName } from '../../content/homepage';

function CapabilityIcon({ name }: { name: CapabilityIconName }) {
  const paths: Record<CapabilityIconName, ReactNode> = {
    forming: <><path d="M7 8h10v8H7z" /><path d="M4 4h4v4M20 4h-4v4M4 20h4v-4M20 20h-4v-4" /></>,
    threading: <><path d="M5 7h14M5 11h14M5 15h14M5 19h14" /><path d="M8 4v16M16 4v16" /></>,
    drilling: <><path d="M12 3v8" /><path d="M8 11h8l-4 10z" /><path d="M5 5h14" /></>,
    heat: <><path d="M8 20c-2-4 2-5 1-9 3 2 2 4 3 5 2-3 1-7 4-10 1 4 4 6 2 10-1 3-4 5-6 5-2 0-3 0-4-1z" /></>,
    passivation: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="M9 12l2 2 4-5" /></>,
    finishes: <><path d="M4 16l8-12 8 12" /><path d="M6 16h12v4H6z" /><path d="M9 12h6" /></>,
  };

  return (
    <svg className="capability-card__icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

type CapabilityCardProps = {
  number: string;
  title: string;
  description: string;
  icon: CapabilityIconName;
};

export function CapabilityCard({ number, title, description, icon }: CapabilityCardProps) {
  return (
    <article className="capability-card" tabIndex={0}>
      <div className="capability-card__topline">
        <CapabilityIcon name={icon} />
        <span>{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="capability-card__line" aria-hidden="true" />
    </article>
  );
}
