"use client"

import Link from 'next/link'
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { MessageSquare, PlusIcon } from 'lucide-react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from 'radix-ui/avatar'

const user = {
  name: "Misumi Makoto",
  avatar: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
}

export default function NavFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        {/* Invite Member */}
        <SidebarMenuItem className='my-1'>
          <SidebarMenuButton asChild className='text-muted-foreground'>
            <Link href="/invite">
              <PlusIcon /> <span>Invite Member</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Feedback */}
        <SidebarMenuItem className='my-1'>
          <SidebarMenuButton asChild className='text-muted-foreground'>
            <Link href="/feedback">
              <MessageSquare /> <span>Feedback</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* User */}
        <SidebarMenuItem className='my-1'>
          <SidebarMenuButton>
            <Avatar className="size-6 overflow-hidden rounded-full">
              <AvatarImage className='size-full object-cover' src={user.avatar} alt={user.name} />
              <AvatarFallback className='text-[10px]'>MM</AvatarFallback>
            </Avatar>
            <span className="font-medium">{user.name}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

      </SidebarMenu>
    </SidebarFooter>
  )
}