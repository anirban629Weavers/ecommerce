import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import Script from "next/script";
import StoreProvider from "@/redux/StoreProvider";
import "react-toastify/dist/ReactToastify.css";
import TokenValidator from "@/interceptor/TokenValidator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <TokenValidator>
            <Header />
            {children}
            <Footer />
          </TokenValidator>
        </StoreProvider>
        <script src="js/bootstrap.bundle.min.js" async />
        <script src="js/tiny-slider.js" async />
        <Script src="js/custom.js" />
        <Script src="https://kit.fontawesome.com/f24ba414dc.js" async />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.js"
          async
        />
      </body>
    </html>
  );
}