import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Clean | Dr. Joel Junior RT — Ortodontia em Volta Redonda/RJ",
  description:
    "Clínica odontológica em Volta Redonda/RJ especializada em Ortodontia. Dr. Joel Junior RT, CRO 19478/RJ | EPAO 4963. Mais de 30 anos transformando sorrisos. Agende sua consulta.",
  keywords:
    "dentista Volta Redonda, ortodontia Volta Redonda, Dental Clean, Dr Joel Junior, clínica odontológica Retiro Volta Redonda",
  openGraph: {
    title: "Dental Clean | Ortodontia em Volta Redonda/RJ",
    description:
      "Especialistas em Ortodontia há mais de 30 anos. Dr. Joel Junior RT — CRO 19478/RJ.",
    url: "https://dentalcleanvr.com.br",
    siteName: "Dental Clean",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
