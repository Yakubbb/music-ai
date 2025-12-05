import { AbobaComponent } from "@/components/aboba";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        SIDEBAR
        <AbobaComponent/>
        {children}
      </body>
    </html>
  );
}