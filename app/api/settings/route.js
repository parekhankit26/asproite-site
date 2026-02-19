import { prisma } from '@/lib/db';

export async function GET() {
  const settings = await prisma.siteSettings.findFirst();
  return Response.json({ settings });
}

export async function PUT(req) {
  const body = await req.json();
  const current = await prisma.siteSettings.findFirst();
  if (!current) return Response.json({ error: 'Settings not found' }, { status: 404 });
  const settings = await prisma.siteSettings.update({ where: { id: current.id }, data: body });
  return Response.json({ settings });
}
