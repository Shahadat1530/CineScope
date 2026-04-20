import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "CineScope",
  description: "Movie app",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-bg text-textMain`}
      >
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <div id="modal-root-content" />
          {modal}
          <Footer />
        </div>
      </body>
    </html>
  );
}