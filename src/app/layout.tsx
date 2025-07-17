import "./globals.scss";
import { UserProvider } from "@/context/UserContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="fa">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
