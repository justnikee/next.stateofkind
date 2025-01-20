"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  User,
  ListCollapseIcon,
  Tag,
  Home,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
  }
  ],
  navMain: [
    // {
    //   title: "Home",
    //   url: "/admin",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   // items: [],
    // },
    // {
    //   title: "Orders",
    //   url: "/admin/orders",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Drafts",
    //       url: "#",
    //     },
    //     {
    //       title: "Abandoned Checkouts",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Products",
    //   url: "/admin/products",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Collections",
    //       url: "/admin/category",
    //     },
    //   ],
    // },
    // {
    //   title: "Customers",
    //   url: "/admin/users",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Home",
      url: "/admin",
      icon: Home,
    },
    {
      name: "Products",
      url: "/admin/products",
      icon: Tag,
    },
    {
      name: "Collection",
      url: "/admin/category",
      icon: ListCollapseIcon,
    },
    {
      name: "Users",
      url: "/admin/users",
      icon: User,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
