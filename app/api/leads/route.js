import { z } from 'zod';
import { prisma } from '@/lib/db';

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  service: z.string().optional().nullable(),
  message: z.string().min(5)
});

export async function POST(req) {
  try {
    const body = await req.json();
    const data = leadSchema.parse(body);
    const lead = await prisma.lead.create({ data });
    return Response.json({ ok: true, leadId: lead.id });
  } catch {
    return Response.json({ error: 'Invalid lead payload.' }, { status: 400 });
  }
}

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
  return Response.json({ leads });
}
