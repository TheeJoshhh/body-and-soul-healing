'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import PrimaryNav from "@/components/PrimaryNav";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You may want to add your meta tags, title, and link to stylesheets here */}
      </head>
      <body className="h-full">
        <Providers>
          <main className="h-full">
            <PrimaryNav></PrimaryNav>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
