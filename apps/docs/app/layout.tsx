// app/layout.tsx

import "@/styles/globals.css";
import "@/styles/sandpack.css";
import {Metadata} from "next";
import {Providers} from "./providers";
import {Cmdk} from "@/components/cmdk";
import manifest from "@/config/routes.json";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import TopNavbar from "@/components/TopNavbar";
import {Navbar as DesktopNavbar} from "@/components/navbar"; // DesktopNavbar
import {MobileNavbar} from "@/components/MobileNavbar";
import {Footer} from "@/components/footer";
import CategoryTabs from "@/components/CategoryTabs";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  viewport:
    "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  // Other metadata properties...
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
          <div className="flex flex-col min-h-screen">
            {/* Top Navbar - Only visible on mobile */}
            <div className="lg:hidden">
              <TopNavbar />
            </div>

            {/* Desktop Navbar - Only visible on desktop */}
            <div className="hidden lg:block">
              <DesktopNavbar routes={manifest.routes} />
            </div>

            {/* Category Tabs: directly below TopNavbar, visible on mobile */}
            <div className="fixed top-[3rem] z-40 w-full bg-white shadow-md overflow-x-auto no-scrollbar lg:hidden">
              <CategoryTabs />
            </div>

            {/* Main Content */}
            <main className="flex-grow pt-[5rem] pb-[4rem] px-4">{children}</main>

            {/* Mobile Navbar - Only visible on mobile */}
            <div className="lg:hidden">
              <MobileNavbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            </div>

            {/* Footer */}
            <Footer />
          </div>

          <Cmdk />
        </Providers>
      </body>
    </html>
  );
}
