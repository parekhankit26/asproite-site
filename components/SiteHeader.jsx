"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader({ settings, menu, services }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-lg">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-white">
          {settings?.companyName || 'Asproite'}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          {menu?.map((item) =>
            item.label === 'Services' ? (
              <div key={item.id} className="relative group">
                <Link href="/services" className="hover:text-brand-300">Services</Link>
                <div className="absolute top-7 left-0 w-64 rounded-xl border border-white/10 bg-slate-900 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                  {services?.map((service) => (
                    <Link key={service.id} href={`/services#${service.slug}`} className="block rounded-lg px-3 py-2 hover:bg-white/5">
                      <p className="font-medium">{service.title}</p>
                      <p className="text-xs text-slate-400">{service.shortDesc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.id} href={item.path} className="hover:text-brand-300">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden rounded-lg border border-white/20 px-3 py-1 text-sm">
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="container-max py-3 space-y-2">
            {menu?.map((item) => (
              <Link key={item.id} href={item.path} className="block rounded px-2 py-2 hover:bg-white/5" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs uppercase text-slate-400 mb-1">Service List</p>
              {services?.map((s) => (
                <Link key={s.id} href={`/services#${s.slug}`} className="block text-sm text-slate-300 px-2 py-1" onClick={() => setOpen(false)}>
                  • {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
