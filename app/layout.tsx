"use client"
import { Red_Hat_Display, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import MobileSidebar from "@/components/portfolio/MobileSidebar";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${redHatDisplay.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}