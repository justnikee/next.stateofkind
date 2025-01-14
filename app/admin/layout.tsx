"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({children,}: Readonly<{children: React.ReactNode;}>){
  return (
    <>
    <html lang="en">
      <body>
        <Header/>
        <main className="m-auto">
          {children}
        </main>
      </body>
    </html>
    </>
  )
}


export const Header = () => {
 const pathname = usePathname();

  return (
   <div className="">
     <div className="h-14 flex bg-[#1A1A1A] justify-between px-5 items-center">
      <h2 className="text-3xl uppercase text-white">Dashboard</h2>
      <div>
        <input type="text" placeholder="search" />
      </div>
      <div>
        <button>Account</button>
      </div>
     </div>
     <div className="w-[240px] bg-[#EBEBEB] flex flex-col p-3 fixed left-0">
         <Link className={`text-sm capitalize font-bold text-[#303030] font-[Mona Sans] hover:bg-white rounded-sm p-2 ${pathname === '/admin' ? "bg-bg-white" : ""}`} href={"/admin"}>Home</Link>
         <Link className={`text-sm capitalize font-bold text-[#303030] hover:bg-white rounded-sm p-2 ${pathname === '/admin/products' ? "bg-bg-white" : ""}`} href={"/admin/products"}>Products</Link>
         <Link className={`text-sm capitalize font-bold text-[#303030] hover:bg-white rounded-sm p-2 ${pathname === '/admin/orders' ? "bg-bg-white" : ""}`} href={"/admin/orders"}>Orders</Link>
         <Link className={`text-sm capitalize font-bold text-[#303030] hover:bg-white rounded-sm p-2 ${pathname === '/admin/user' ? "bg-bg-white" : ""}`} href={"/admin/user"}>Customers</Link>
     </div>
   </div>
  )
}