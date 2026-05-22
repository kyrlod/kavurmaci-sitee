import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavurmacı Yakup Usta | Premium Restoran – Ferizli, Sakarya",
  description:
    "Sakarya Ferizli'de otoyol üzerinde konumlanan premium kavurma restoranı. Geleneksel Türk kavurması, ızgara etler ve özel tarifler. Yakup Usta'nın 30 yıllık lezzet deneyimi.",
  keywords: [
    "kavurmacı yakup usta",
    "ferizli restoran",
    "sakarya kavurma",
    "otoyol restoran",
    "premium kavurma",
    "ızgara et",
  ],
  openGraph: {
    title: "Kavurmacı Yakup Usta | Premium Restoran",
    description: "30 yıllık ustalık, eşsiz kavurma lezzeti. Ferizli, Sakarya.",
    type: "website",
    locale: "tr_TR",
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
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0807] text-[#f5f0e8]">{children}</body>
    </html>
  );
}
