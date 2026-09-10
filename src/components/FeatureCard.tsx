function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <article className="feature-card">
      <div className="icon-box">
        <Icon />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
