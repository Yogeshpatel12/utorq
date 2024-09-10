import "../../styles/bootstrap.min.css";
import "../../styles/icofont.min.css";
import "../../styles/animate.min.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unique Dc Motor Brake",
  description: "unique dc motor brake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <GoTop />
      </body>
    </html>
  );
}
