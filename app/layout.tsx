import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/Buttons/ThemeContext";

export const metadata = {
  title: "Candra Setiawan - Junior Front End Developer",
  description: "Hi, I'm Front Developer from Indonesia",
  authors: {
    name: "Candra Setiawan",
  },
  creator: "Candra Setiawan",
  keywords: [
    "Candra Setiawan",
    "candrasetiawann",
    "Front End",
    "Candra",
    "Developer",
  ],
  openGraph: {
    description: "Hi, I'm Front Developer from Indonesia",
    title: "Candra Setiawan - Junior Front End Developer",
    url: "candrasetiawann.vercel.app",
    type: "website",
  },
};

const FiraCode = localFont({
  src: [
    {
      path: "./assets/font/FiraCode-Regular.ttf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./assets/font/FiraCode-Medium.ttf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "./assets/font/FiraCode-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html id="html" lang="en" className={`${FiraCode.className} `}>
        <body className="dark:bg-bgdark overflow-x-hidden">
          <Navbar />
          <div className=" relative mx-auto mt-16  md:mt-0 md:container lg:px-32 xl:px-72 max-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
