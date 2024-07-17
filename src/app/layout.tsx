"use client";
import { OverlayProvider } from "@toss/use-overlay";

import "./globals.css";
import { UserColorProvider } from "@/store/userColorContext";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <OverlayProvider>
        <UserColorProvider>
          <body className="w-full h-full flex flex-col items-center justify-center bg-[#403e3e]">
            <div className="max-w-[500px] w-full h-full bg-white">
              {children}
            </div>
          </body>
        </UserColorProvider>
      </OverlayProvider>
    </html>
  );
}
