"use client"

import { Home, Settings, Users } from 'lucide-react'
import NavMain, { INavItem } from './sidebar/nav-main'
import SidebarBrand from './sidebar/sidebar-brand'
import { Sidebar, SidebarContent, SidebarRail } from './ui/sidebar'
import NavFooter from './sidebar/nav-footer'
import NavFavourites, { IFavourite } from './sidebar/nav-favourites'

export function AppSidebar() {

  const items: INavItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Contacts", href: "/contacts", icon: Users },
    { label: "Settings", href: "/settings", icon: Settings },
  ]

  const favorites: IFavourite[] = [
    { name: "Airbnb", href: "/contacts/airbnb", colour: "bg-pink-500" },
    { name: "Google", href: "/contacts/google", colour: "bg-blue-500" },
    { name: "Microsoft", href: "/contacts/microsoft", colour: "bg-emerald-500" },
  ]

  return (
    <Sidebar>
      <SidebarBrand />

      <SidebarContent>
        <NavMain items={items} />
        <NavFavourites favorites={favorites} />
      </SidebarContent>

      <NavFooter />
      <SidebarRail />
    </Sidebar>
  )
}