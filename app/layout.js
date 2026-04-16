import "./globals.css";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "CineScope",
  description: "CineScope - A movie site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${dmSans.variable} ${dmMono.variable} bg-bg text-textMain`}>
        {children}
      </body>
    </html>
  );
}