import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

async function updateSettings(formData) {
  'use server';
  const id = formData.get('id');
  const data = {
    companyName: String(formData.get('companyName') || ''),
    website: String(formData.get('website') || ''),
    heroTitle: String(formData.get('heroTitle') || ''),
    heroSubtitle: String(formData.get('heroSubtitle') || ''),
    aboutTitle: String(formData.get('aboutTitle') || ''),
    aboutDescription: String(formData.get('aboutDescription') || ''),
    contactEmail: String(formData.get('contactEmail') || ''),
    contactPhone: String(formData.get('contactPhone') || ''),
    contactAddress: String(formData.get('contactAddress') || '')
  };
  await prisma.siteSettings.update({ where: { id }, data });
}

export default async function AdminPage() {
  const [settings, leads, services, portfolio, menu] = await Promise.all([
    prisma.siteSettings.findFirst(),
    prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 20 }),
    prisma.service.findMany({ orderBy: { order: 'asc' } }),
    prisma.portfolioItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.menuItem.findMany({ orderBy: { order: 'asc' } })
  ]);

  return (
    <main className="container-max py-12 space-y-8">
      <h1 className="text-3xl font-bold">Admin - Dynamic Content</h1>

      {settings && (
        <form action={updateSettings} className="glass rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">Site Settings</h2>
          <input type="hidden" name="id" value={settings.id} />
          <div className="grid md:grid-cols-2 gap-3">
            <input name="companyName" defaultValue={settings.companyName} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <input name="website" defaultValue={settings.website} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <input name="heroTitle" defaultValue={settings.heroTitle} className="rounded bg-slate-900 border border-white/10 px-3 py-2 md:col-span-2" />
            <textarea name="heroSubtitle" defaultValue={settings.heroSubtitle} className="rounded bg-slate-900 border border-white/10 px-3 py-2 md:col-span-2" />
            <input name="aboutTitle" defaultValue={settings.aboutTitle} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <textarea name="aboutDescription" defaultValue={settings.aboutDescription} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <input name="contactEmail" defaultValue={settings.contactEmail} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <input name="contactPhone" defaultValue={settings.contactPhone} className="rounded bg-slate-900 border border-white/10 px-3 py-2" />
            <input name="contactAddress" defaultValue={settings.contactAddress} className="rounded bg-slate-900 border border-white/10 px-3 py-2 md:col-span-2" />
          </div>
          <button className="bg-brand-500 rounded px-4 py-2 font-semibold">Save Settings</button>
        </form>
      )}

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-3">Menu (Dynamic)</h2>
        <ul className="text-sm text-slate-300 space-y-1">{menu.map((m) => <li key={m.id}>{m.order}. {m.label} → {m.path}</li>)}</ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-3">Services (Dynamic)</h2>
        <ul className="text-sm text-slate-300 space-y-1">{services.map((s) => <li key={s.id}>{s.order}. {s.title}</li>)}</ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-3">Portfolio (Dynamic)</h2>
        <ul className="text-sm text-slate-300 space-y-1">{portfolio.map((p) => <li key={p.id}>{p.order}. {p.title} ({p.category})</li>)}</ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-3">Recent Leads</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left"><th className="p-2">Name</th><th className="p-2">Email</th><th className="p-2">Service</th><th className="p-2">Date</th></tr></thead>
            <tbody>{leads.map((l) => <tr key={l.id} className="border-t border-white/10"><td className="p-2">{l.name}</td><td className="p-2">{l.email}</td><td className="p-2">{l.service || '-'}</td><td className="p-2">{new Date(l.createdAt).toLocaleString()}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
