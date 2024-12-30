import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${spaceGroteskSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
