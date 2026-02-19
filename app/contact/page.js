import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';
import LeadAgent from '@/components/LeadAgent';
import { getSiteData } from '@/lib/site';

export default async function ContactPage() {
  const { settings, menu, services } = await getSiteData();

  return (
    <main>
      <SiteHeader settings={settings} menu={menu} services={services} />
      <section className="container-max py-16">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-slate-300 mb-8">Tell us about your requirements and we will propose the best solution.</p>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <ContactForm services={services} />
          <LeadAgent />
        </div>
        <div className="glass rounded-2xl p-6 mt-6 text-slate-300">
          <p><strong>Email:</strong> {settings?.contactEmail}</p>
          <p><strong>Phone:</strong> {settings?.contactPhone}</p>
          <p><strong>Address:</strong> {settings?.contactAddress}</p>
        </div>
      </section>
      <SiteFooter settings={settings} />
    </main>
  );
}
