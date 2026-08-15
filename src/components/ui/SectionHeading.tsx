type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  titleLines?: string[];
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  titleLines,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <div className="section-heading__kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 aria-label={title}>
        {titleLines
          ? titleLines.map((line) => <span className="section-heading__line" key={line}>{line}</span>)
          : title}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
