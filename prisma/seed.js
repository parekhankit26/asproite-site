const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.service.deleteMany();
  await prisma.testimonial.deleteMany();

  await prisma.service.createMany({
    data: [
      {
        title: 'Cloud Strategy & Migration',
        description: 'Move to cloud with confidence using a structured roadmap, workload assessment, and zero-downtime cutover plans.',
        icon: 'Cloud',
        order: 1
      },
      {
        title: 'DevOps & Automation',
        description: 'Automate CI/CD, infrastructure provisioning, and release workflows to reduce delivery risk and improve velocity.',
        icon: 'Settings2',
        order: 2
      },
      {
        title: 'Managed Consulting',
        description: 'On-demand technical leadership for architecture reviews, security posture, cost optimization, and reliability.',
        icon: 'ShieldCheck',
        order: 3
      }
    ]
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Amelia Foster',
        role: 'CTO',
        company: 'NorthHive Systems',
        quote: 'Asproite redesigned our cloud stack and cut deployment time by 60%. Their consulting is sharp and execution-focused.',
        rating: 5
      },
      {
        name: 'Ravi Menon',
        role: 'Operations Director',
        company: 'Velocore Logistics',
        quote: 'Great communication and deeply technical team. They turned our manual ops into an automated engine.',
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
