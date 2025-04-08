"use client";

import { usePathname } from "next/navigation";
// import AnnouncementBar from "./ui/announcementbar";
import NavigationBar from "./ui/navigationBar";
import Footer from "./ui/footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {/* {!isAdminRoute && <AnnouncementBar />} */}
      {!isAdminRoute && <NavigationBar />}
      <main className="mt-[-64px]">{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default LayoutWrapper;
