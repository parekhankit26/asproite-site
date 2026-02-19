"use client";

import { useState } from 'react';

export default function LeadAgent() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi! I am Asproite AI assistant. Tell me about your project and I can guide next steps.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const next = [...messages, { role: 'user', text: input }];
    setMessages(next);
    setLoading(true);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply || 'Could not respond.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Network issue. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-5 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-3">AI Lead Assistant</h3>
      <div className="space-y-3 overflow-y-auto max-h-80 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`rounded-lg px-3 py-2 text-sm ${m.role === 'user' ? 'bg-brand-600/40 ml-8' : 'bg-white/5 mr-8'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={send} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your requirement..."
          className="flex-1 rounded-lg bg-slate-900 border border-white/10 px-3 py-2"
        />
        <button className="rounded-lg bg-brand-500 px-4 py-2 font-medium disabled:opacity-60" disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
