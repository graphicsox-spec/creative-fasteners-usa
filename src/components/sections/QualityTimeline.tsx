import { qualitySteps } from '../../content/homepage';

export function QualityTimeline() {
  return (
    <ol className="quality-timeline">
      {qualitySteps.map((step) => (
        <li key={step.number}>
          <div className="quality-timeline__marker">
            <span>{step.number}</span>
          </div>
          <div className="quality-timeline__copy">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
