import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={`${inter.className} relative min-h-screen`}>
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <Footer />
      </body>
    </html>
  );
}
