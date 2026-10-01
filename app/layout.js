export const metadata = {
  title: "NextJS App",
  description: "This is a NextJS app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}