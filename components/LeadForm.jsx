"use client";

import { useState } from 'react';

const initial = { name: '', email: '', company: '', phone: '', message: '' };

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', message: '' });

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (!res.ok) {
      setStatus({ type: 'error', message: data.error || 'Failed to submit.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks! We will contact you shortly.' });
    setForm(initial);
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
      <h3 className="text-xl font-semibold">Let’s discuss your project</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
        <input required name="email" type="email" value={form.email} onChange={onChange} placeholder="Business email" className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
        <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
      </div>
      <textarea required name="message" value={form.message} onChange={onChange} rows={4} placeholder="Tell us your requirements" className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
      <button className="rounded-lg bg-brand-500 hover:bg-brand-400 transition px-5 py-2.5 font-semibold">Send Inquiry</button>
      {status.message && (
        <p className={status.type === 'error' ? 'text-rose-400' : 'text-emerald-400'}>{status.message}</p>
      )}
    </form>
  );
}
