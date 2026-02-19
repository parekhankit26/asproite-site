import Link from 'next/link';
import { Star } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getSiteData } from '@/lib/site';

export default async function HomePage() {
  const { settings, menu, services, testimonials } = await getSiteData();

  return (
    <main>
      <SiteHeader settings={settings} menu={menu} services={services} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,152,255,0.22),transparent_45%)]" />
        <div className="container-max py-20 relative">
          <p className="inline-flex glass rounded-full px-3 py-1 text-xs text-brand-200">{settings?.website}</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight max-w-4xl">{settings?.heroTitle}</h1>
          <p className="mt-5 text-slate-300 max-w-2xl text-lg">{settings?.heroSubtitle}</p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="rounded-xl bg-brand-500 px-6 py-3 font-semibold hover:bg-brand-400">Get Free Consultation</Link>
            <Link href="/portfolio" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5">View Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="container-max py-14">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <article key={service.id} className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-slate-300">{service.shortDesc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-max py-10">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <article key={t.id} className="glass rounded-2xl p-6">
              <div className="flex gap-1 text-amber-300 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">{t.name} · {t.role}, {t.company}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter settings={settings} />
    </main>
  );
}
