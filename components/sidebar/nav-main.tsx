"use client"

import Link from 'next/link'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { LucideIcon } from 'lucide-react/types'
import { usePathname } from 'next/navigation'

export interface INavItem {
  label: string
  href?: string
  icon?: LucideIcon
}

export default function NavMain({ items }: { items: INavItem[] }) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, i) => (
            <SidebarMenuItem key={i}>
              {!!item?.href && (
                <SidebarMenuButton asChild isActive={isActive(item?.href)}>
                  <Link href={item.href}>
                    {item?.icon && <item.icon />}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              )}
              {!item?.href && (
                <SidebarMenuButton>
                  {item?.icon && <item.icon />}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}