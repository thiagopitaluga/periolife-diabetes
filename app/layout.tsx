import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "periolife-diabetes.vercel.app";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const title = "Diabetes e Saúde Periodontal | PerioLife Brasília";
  const description =
    "Entenda a relação entre diabetes e periodontite e agende uma avaliação periodontal especializada na PerioLife, em Brasília.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [
      "diabetes e periodontite",
      "saúde periodontal",
      "periodontista Brasília",
      "gengiva sangrando",
      "PerioLife",
    ],
    alternates: { canonical: baseUrl },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: baseUrl,
      siteName: "PerioLife",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1734,
          height: 909,
          alt: "Diabetes e saúde periodontal — uma relação de mão dupla",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og.png`],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: "/assets/periolife-logo.png",
      shortcut: "/assets/periolife-logo.png",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
