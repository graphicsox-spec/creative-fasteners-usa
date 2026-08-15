type IndustryPanelProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function IndustryPanel({ number, title, description, image, alt }: IndustryPanelProps) {
  return (
    <article className="industry-panel">
      <img src={image} alt={alt} width="1280" height="768" loading="lazy" />
      <div className="industry-panel__shade" />
      <div className="industry-panel__content">
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="industry-panel__corner" aria-hidden="true" />
    </article>
  );
}
