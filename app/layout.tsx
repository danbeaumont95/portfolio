// import '../src/app/globals.css';
import '@/app/ui/global.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}
