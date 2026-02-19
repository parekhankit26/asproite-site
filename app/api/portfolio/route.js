import { prisma } from '@/lib/db';

export async function GET() {
  const portfolio = await prisma.portfolioItem.findMany({ orderBy: { order: 'asc' } });
  return Response.json({ portfolio });
}

export async function POST(req) {
  const body = await req.json();
  const item = await prisma.portfolioItem.create({ data: body });
  return Response.json({ item });
}
