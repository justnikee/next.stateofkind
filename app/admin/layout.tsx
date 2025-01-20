import { Inter } from "next/font/google";
import ClientProvider from "../clientProvider";
import { AppSidebar } from "@/components/app-sidebar"; // Import the sidebar
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Page",
  description: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <SidebarProvider>
            <AppSidebar /> {/* Render the sidebar here */}
            <main className="w-full" >{children}</main>
          </SidebarProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
