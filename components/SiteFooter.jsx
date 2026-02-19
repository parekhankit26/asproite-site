export default function SiteFooter({ settings }) {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-max py-8 text-sm text-slate-400 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {settings?.companyName || 'Asproite'}. All rights reserved.</p>
        <p>{settings?.contactEmail} · {settings?.contactPhone}</p>
      </div>
    </footer>
  );
}
