import { Inter, Roboto, Caveat } from "next/font/google";
import Footer from "../GlobalComponents/Footer/Footer";
import Navbar from "../GlobalComponents/Navbar/Navbar";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${caveat.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
