import { prisma } from '@/lib/db';

export async function GET() {
  const menu = await prisma.menuItem.findMany({ orderBy: { order: 'asc' } });
  return Response.json({ menu });
}

export async function POST(req) {
  const body = await req.json();
  const item = await prisma.menuItem.create({ data: body });
  return Response.json({ item });
}
