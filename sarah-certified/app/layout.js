import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarah Certified",
  description: "Sarah Certified Culinary Confidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href='/scsp-logo.png'
        type="image/x-icon"
        sizes="16x16"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
