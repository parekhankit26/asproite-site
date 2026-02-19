import './globals.css';

export const metadata = {
  title: 'Asproite Cloud and Consultancy Ltd',
  description:
    'Dynamic business website for Asproite Cloud and Consultancy Ltd with lead generation AI assistant.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
