import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
// import { getSiteSettings } from "@/Hooks/api/cms_api";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";

// Metadata
export const metadata: Metadata = {
  title: "OSI - Our Social Image",
  description: "OSI - Our Social Image",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let faviconUrl = "/favicon.svg";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body>
        <QueryProvider>
          <AuthProvider>
            <AosProvider>
              <Toaster />
              {children}
            </AosProvider>
            <Toaster />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
