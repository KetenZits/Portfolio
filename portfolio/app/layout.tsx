import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import CustomNavbar from "@/components/CustomNavbar";


export const metadata: Metadata = {
  title: {
    default: "Portfolio TK",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logotk.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-foreground font-sans antialiased overflow-y-scroll",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col">
            <CustomNavbar/>
            <main className="">
              {children}
            </main>
            {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
