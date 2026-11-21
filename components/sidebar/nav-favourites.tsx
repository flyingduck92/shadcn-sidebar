"use client"

import Link from 'next/link'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

export interface IFavourite {
  name: string
  href: string
  colour: string
}

interface IBrandTile {
  name: string
  colour: string
}

function BrandTile({ name, colour }: IBrandTile) {
  return (
    <span className={`flex size-4 items-center justify-center rounded-lg text-[10px] font-bold text-white ${colour}`} > {name[0]}</span >
  )
}

export default function NavFavourites({ favorites }: { favorites: IFavourite[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Favourite</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {favorites.map((item, i) => (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <BrandTile name={item.name} colour={item.colour} />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}