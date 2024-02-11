import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Meet Mate - Events Simplified Together.",
  description:
    "Your Ultimate Event Companion. Seamlessly organize, discover, and join events with our innovative web app powered by Next JS 14, Tailwind CSS, and cutting-edge technologies. Effortlessly manage events, ensure secure authentication, and enjoy hassle-free checkout and payments. Elevate your event experience with Meet Mate, where connections happen effortlessly.",
  icons: {
    icon: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
