import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARFA SOHAIL KHAN — Personal Portfolio",
  description: "ENGINEERING HIGH-FIDELITY DIGITAL EXPERIENCES WITH THE PRECISION OF AN ARCHITECT AND THE SOUL OF AN ARTIST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
