import "../styles/globals.css";
import type { Metadata } from "next";
import { HomeProvider } from "@/context";
import StyledComponentsRegistry from "@/lib/registry";
import FooterSection from "@/components/FooterSection/Index";

export const metadata: Metadata = {
  title: "Cueprise",
  description: "Cueprise | Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <HomeProvider>
            {children}
            <FooterSection />
          </HomeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
