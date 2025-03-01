import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});


const raleway = Raleway({
  variable: "--font-title",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
