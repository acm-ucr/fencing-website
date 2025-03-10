import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fencing @ UCR",
  description: "The Offical Fencing Club at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-fencing-overall-background`}>
        <ReactQueryClientProvider>
          <Navigation />
          {children}
        </ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
