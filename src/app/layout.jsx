import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SKZ Creatives",
  description: "We Build What They'll Never Forget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/font.css" />
        <link rel="stylesheet" href="/output.css" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="icon" type="image/jpeg" href="/assets/images/SKZ-Creatives-Logo-10.jpg" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
