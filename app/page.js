import { ArrowRight, Cloud, Settings2, ShieldCheck, Star } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import LeadAgent from '@/components/LeadAgent';
import { getHomepageContent } from '@/lib/content';

const iconMap = { Cloud, Settings2, ShieldCheck };

export default async function HomePage() {
  const { company, services, testimonials } = await getHomepageContent();

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,152,255,0.2),transparent_45%)]" />
        <div className="container-max py-20 relative">
          <p className="inline-flex glass rounded-full px-3 py-1 text-xs text-brand-200">{company.website}</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight max-w-4xl">{company.headline}</h1>
          <p className="mt-5 text-slate-300 max-w-2xl text-lg">{company.subheadline}</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold hover:bg-brand-400 transition">
            Book Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="container-max py-14">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Cloud;
            return (
              <article key={service.id} className="glass rounded-2xl p-6">
                <Icon className="text-brand-300 mb-3" />
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-max py-10">
        <h2 className="text-3xl font-bold mb-6">Client Results</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <article key={t.id} className="glass rounded-2xl p-6">
              <div className="flex gap-1 text-amber-300 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">
                {t.name} · {t.role}, {t.company}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="container-max py-14">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <LeadForm />
          <LeadAgent />
        </div>
      </section>

      <footer className="container-max py-8 text-sm text-slate-400 border-t border-white/10">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </footer>
    </main>
  );
}
