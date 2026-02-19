import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getSiteData } from '@/lib/site';

export default async function PortfolioPage() {
  const { settings, menu, services, portfolio } = await getSiteData();

  return (
    <main>
      <SiteHeader settings={settings} menu={menu} services={services} />
      <section className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {portfolio.map((item) => (
            <article key={item.id} className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wide text-brand-200">{item.category}</p>
              <h2 className="text-2xl font-semibold mt-2">{item.title}</h2>
              <p className="text-slate-300 mt-2">{item.summary}</p>
              <p className="mt-4 text-emerald-300 font-medium">Result: {item.result}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter settings={settings} />
    </main>
  );
}
