export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="section-title">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="section-title-bar">
        <div className="section-title-bar-sub" />
      </div>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
