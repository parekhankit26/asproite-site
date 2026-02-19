import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getSiteData } from '@/lib/site';

export default async function AboutPage() {
  const { settings, menu, services } = await getSiteData();

  return (
    <main>
      <SiteHeader settings={settings} menu={menu} services={services} />
      <section className="container-max py-16">
        <h1 className="text-4xl font-bold mb-5">{settings?.aboutTitle || 'About Us'}</h1>
        <p className="text-slate-300 max-w-3xl text-lg">{settings?.aboutDescription}</p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="glass rounded-2xl p-6"><h3 className="font-semibold mb-2">Mission</h3><p className="text-slate-300">Deliver practical cloud transformation that creates measurable business value.</p></div>
          <div className="glass rounded-2xl p-6"><h3 className="font-semibold mb-2">Vision</h3><p className="text-slate-300">Become a trusted consulting partner for modern digital businesses.</p></div>
          <div className="glass rounded-2xl p-6"><h3 className="font-semibold mb-2">Approach</h3><p className="text-slate-300">Consulting-first planning, engineering execution, and transparent communication.</p></div>
        </div>
      </section>
      <SiteFooter settings={settings} />
    </main>
  );
}
