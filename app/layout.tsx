import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = "https://lp.periolife.com.br/v2";
  const assetUrl = "https://periolife-diabetes.vercel.app";
  const title = "Diabetes e Saúde Periodontal | PerioLife Brasília";
  const description =
    "Entenda a relação entre diabetes e periodontite e agende uma avaliação periodontal especializada na PerioLife, em Brasília.";

  return {
    metadataBase: new URL(assetUrl),
    title,
    description,
    keywords: [
      "diabetes e periodontite",
      "saúde periodontal",
      "periodontista Brasília",
      "gengiva sangrando",
      "PerioLife",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonicalUrl,
      siteName: "PerioLife",
      title,
      description,
      images: [
        {
          url: `${assetUrl}/og.png`,
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
      images: [`${assetUrl}/og.png`],
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
