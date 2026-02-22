import "./globals.css";

export const metadata = {
  title: "Simon Dev | Web3 Developer",
  description: "Web2 & Web3 Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}