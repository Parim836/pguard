function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">PGUARD</span>

          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}

export default Page;
