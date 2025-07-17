import { UserProvider } from "../context/UserContext";
import "./globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="fa">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
