import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
export const metadata: Metadata = {
  title: "Gaming App",
  description: "This is a gaming app",
};

// font 
const montserrat = Montserrat({weight: ['400' , '500', '700'], subsets: ['latin']})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
