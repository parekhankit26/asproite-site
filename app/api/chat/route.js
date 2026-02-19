import OpenAI from 'openai';

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function POST(req) {
  const { messages = [] } = await req.json();

  const systemPrompt = `You are Asproite Cloud and Consultancy Ltd AI lead assistant.
Goal: qualify leads and drive consultation booking.
Ask concise questions about budget, timeline, stack, and business goals.
Tone: professional, warm, and practical.
If user seems ready, ask for name/email/phone and invite to submit the inquiry form.`;

  if (!client) {
    return Response.json({
      reply:
        'Thanks for your message. Please share your project scope, timeline, and expected budget. Our team will connect quickly.'
    });
  }

  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.4,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.map((m) => ({ role: m.role, content: m.text }))
    ]
  });

  return Response.json({ reply: completion.choices[0]?.message?.content || 'How can we help?' });
}
