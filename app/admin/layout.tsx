"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-dashboard flex">
      <Sidebar />
      <div className="admin-content flex-1">
        <Header />
        <main className="p-6 admin-main-content">{children}</main>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="h-14 bg-[#1A1A1A] text-white flex items-center px-5">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="ml-auto">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md border"
        />
      </div>
    </header>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Home" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/category", label: "Collections" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/user", label: "Customers" },
  ];

  return (
    <aside className="w-[240px] bg-[#EBEBEB] p-4 flex flex-col h-screen fixed">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`p-2 rounded-sm text-sm capitalize font-bold ${
            pathname === link.href ? "bg-white text-[#1A1A1A]" : "text-[#303030]"
          } hover:bg-white`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};
