import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ParticlesBackground from "@/components/Particles";

const poppinsFont = Poppins({
  variable: "--font-poppins", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Stephen Onyango",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <Toaster position="bottom-right" 
          reverseOrder={false}
          toastOptions={{
            className: "custom-toast",
          }}
        />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
