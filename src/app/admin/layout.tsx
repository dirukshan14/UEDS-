import '../globals.css';

export const metadata = {
  title: 'UEDS Admin'
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
