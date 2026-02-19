import { prisma } from '@/lib/db';

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  return Response.json({ services });
}

export async function POST(req) {
  const body = await req.json();
  const service = await prisma.service.create({ data: body });
  return Response.json({ service });
}
