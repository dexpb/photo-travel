import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import  localFont  from 'next/font/local';

const anton = localFont({
  src:[{
    path: "../fonts/AntonSC-Regular.ttf",
    weight: "400",
  },],
  variable:"--font-anton"
})
const inter = localFont({
  src:[{
    path: "../fonts/Inter-VariableFont.ttf",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
  },],
  variable:"--font-inter"
})

export const metadata: Metadata = {
  title: "Photo Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable}, ${inter.variable} bg-zinc-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
