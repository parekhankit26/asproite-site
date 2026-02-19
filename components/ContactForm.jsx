"use client";

import { useState } from 'react';

const initial = { name: '', email: '', company: '', phone: '', service: '', message: '' };

export default function ContactForm({ services = [] }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) return setStatus(data.error || 'Failed to submit');
    setStatus('Submitted successfully. Our team will contact you.');
    setForm(initial);
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-3">
      <h3 className="text-xl font-semibold">Start a conversation</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <input className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="company" placeholder="Company" value={form.company} onChange={onChange} />
        <input className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
      </div>
      <select className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="service" value={form.service} onChange={onChange}>
        <option value="">Select service</option>
        {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
      </select>
      <textarea className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" name="message" rows={5} placeholder="Project requirements" value={form.message} onChange={onChange} required />
      <button className="rounded-lg bg-brand-500 px-5 py-2.5 font-semibold hover:bg-brand-400">Send Message</button>
      {status && <p className="text-sm text-brand-200">{status}</p>}
    </form>
  );
}
