import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-google",
});

export const metadata: Metadata = {
  title: "Authentication with Auth.js",
  description: "Authentication example using Next.js and Auth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
