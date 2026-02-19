import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main className="container-max py-12">
      <h1 className="text-3xl font-bold mb-6">Leads Dashboard</h1>
      <div className="overflow-x-auto glass rounded-2xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Company</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10 align-top">
                <td className="p-3 whitespace-nowrap">{new Date(lead.createdAt).toLocaleString()}</td>
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.company || '-'}</td>
                <td className="p-3">{lead.phone || '-'}</td>
                <td className="p-3 max-w-md">{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
