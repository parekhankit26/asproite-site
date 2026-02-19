const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.lead.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.service.deleteMany();
  await prisma.portfolioItem.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.siteSettings.deleteMany();

  await prisma.siteSettings.create({
    data: {
      companyName: 'Asproite Cloud and Consultancy Ltd',
      website: 'www.asproite.com',
      heroTitle: 'Build. Scale. Transform with Cloud Confidence.',
      heroSubtitle:
        'We design, modernize, and operate business-critical cloud platforms with consultancy-first execution.',
      aboutTitle: 'About Asproite',
      aboutDescription:
        'Asproite helps companies modernize infrastructure, improve delivery speed, and reduce operational risk through practical cloud and consulting solutions.',
      contactEmail: 'hello@asproite.com',
      contactPhone: '+44 0000 000000',
      contactAddress: 'London, United Kingdom'
    }
  });

  await prisma.menuItem.createMany({
    data: [
      { label: 'Home', path: '/', order: 1 },
      { label: 'About Us', path: '/about', order: 2 },
      { label: 'Services', path: '/services', order: 3 },
      { label: 'Portfolio', path: '/portfolio', order: 4 },
      { label: 'Contact Us', path: '/contact', order: 5 }
    ]
  });

  await prisma.service.createMany({
    data: [
      {
        title: 'Cloud Strategy & Migration',
        slug: 'cloud-strategy-migration',
        shortDesc: 'Move to cloud with low-risk migration planning.',
        description:
          'Assess workloads, design target architecture, and execute secure migration with minimal downtime.',
        icon: 'Cloud',
        order: 1
      },
      {
        title: 'DevOps Automation',
        slug: 'devops-automation',
        shortDesc: 'CI/CD and infrastructure automation for faster releases.',
        description:
          'Automate build, test, and deployment pipelines while enforcing quality and governance controls.',
        icon: 'Settings2',
        order: 2
      },
      {
        title: 'Security & Compliance',
        slug: 'security-compliance',
        shortDesc: 'Harden cloud environments and align with compliance needs.',
        description:
          'Implement IAM standards, monitoring, vulnerability management, and security baselines.',
        icon: 'ShieldCheck',
        order: 3
      }
    ]
  });

  await prisma.portfolioItem.createMany({
    data: [
      {
        title: 'Retail Cloud Modernization',
        category: 'Cloud Transformation',
        summary: 'Migrated a retail stack to a scalable multi-region architecture.',
        result: '42% lower infrastructure cost and 99.95% uptime.',
        order: 1
      },
      {
        title: 'Logistics CI/CD Automation',
        category: 'DevOps',
        summary: 'Implemented full release automation and observability.',
        result: 'Release frequency improved from monthly to daily.',
        order: 2
      }
    ]
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Amelia Foster',
        role: 'CTO',
        company: 'NorthHive Systems',
        quote: 'Asproite transformed our delivery velocity and cloud reliability.',
        rating: 5
      },
      {
        name: 'Ravi Menon',
        role: 'Operations Director',
        company: 'Velocore Logistics',
        quote: 'Excellent consulting quality and execution ownership from day one.',
        rating: 5
      }
    ]
  });

  console.log('Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
