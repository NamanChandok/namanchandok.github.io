import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Chandok",
  description: "Full stack developer | Machine Learning Enthusiast | GGSIPU'26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
