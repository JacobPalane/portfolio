import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Jacob Pulane - MSc Chemistry Researcher',
  description: 'Emerging analytical chemist and hydrometallurgy researcher with expertise in Rare Earth Elements recovery, biomining, analytical instrumentation, and data analysis.',
  keywords: ['Chemistry', 'Rare Earth Elements', 'Hydrometallurgy', 'Analytical Chemistry', 'Research', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
