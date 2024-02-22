import Navbar from "@/components/navbar/Navbar";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Movie DB",
  description: "Developed by Anthony Allois",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
