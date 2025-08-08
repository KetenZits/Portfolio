import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import CustomNavbar from "@/components/CustomNavbar";
import { Github, Facebook, Instagram, Mail } from 'lucide-react';


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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/KetenZits',
      hoverColor: 'hover:text-purple-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/first.t.thanapon.n?locale=th_TH',
      hoverColor: 'hover:text-purple-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/karasumi_zz/',
      hoverColor: 'hover:text-purple-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'firstthanapon2@gmail.com',
      hoverColor: 'hover:text-purple-400'
    }
  ];
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
            <footer className="w-full bg-black/60 backdrop-blur-md border-t border-purple-500/20">
              <div className="container mx-auto px-6 py-8">
                <div className="flex justify-center items-center gap-6 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-110 ${social.hoverColor} text-white/70`}
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6"></div>
                <div className="text-center">
                  <p className="text-purple-300 font-semibold mb-2">
                    © 2025 Thanapon Khawkumkrong
                  </p>
                  <p className="text-white/50 text-sm">
                    Welcome To my Portfolio Website
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
