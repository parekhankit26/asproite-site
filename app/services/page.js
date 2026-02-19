import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getSiteData } from '@/lib/site';

export default async function ServicesPage() {
  const { settings, menu, services } = await getSiteData();

  return (
    <main>
      <SiteHeader settings={settings} menu={menu} services={services} />
      <section className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="space-y-4">
          {services.map((service) => (
            <article id={service.slug} key={service.id} className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-brand-200 mb-3">{service.shortDesc}</p>
              <p className="text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter settings={settings} />
    </main>
  );
}
