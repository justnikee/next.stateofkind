"use client";

import { usePathname } from "next/navigation";
import AnnouncementBar from "./ui/announcementbar";
import NavigationBar from "./ui/navigationBar";
import Footer from "./ui/footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <AnnouncementBar />}
      {!isAdminRoute && <NavigationBar />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default LayoutWrapper;
