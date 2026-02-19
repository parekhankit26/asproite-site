import { prisma } from '@/lib/db';

export async function GET() {
  const [settings, menu, services, portfolio, testimonials] = await Promise.all([
    prisma.siteSettings.findFirst(),
    prisma.menuItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.service.findMany({ orderBy: { order: 'asc' } }),
    prisma.portfolioItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } })
  ]);

  return Response.json({ settings, menu, services, portfolio, testimonials });
}
