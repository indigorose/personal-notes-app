import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "Personal Notes App",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col">
              <Header />
            </div>
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">{children}</main>
          <Toaster />
          </ThemeProvider>
        </body>
    </html>
  );
}
