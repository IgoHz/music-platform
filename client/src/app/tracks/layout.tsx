export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-6/10 mx-auto">{children}</main>;
}
