import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-white text-slate-800 font-sans">
          <div className="flex">
            {/* Sidebar */}

            <div className="flex flex-col w-full">
              <main className="flex-1 p-4">{children}</main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
