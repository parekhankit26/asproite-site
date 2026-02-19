import { prisma } from './db';

export async function getHomepageContent() {
  const [services, testimonials] = await Promise.all([
    prisma.service.findMany({ orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } })
  ]);

  return {
    company: {
      name: 'Asproite Cloud and Consultancy Ltd',
      website: 'www.asproite.com',
      headline: 'Future-ready cloud systems built for growing businesses',
      subheadline:
        'We help companies modernize infrastructure, automate operations, and scale securely with hands-on consulting.'
    },
    services,
    testimonials
  };
}
