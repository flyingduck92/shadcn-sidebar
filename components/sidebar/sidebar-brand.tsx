"use client"

import { SidebarHeader } from '../ui/sidebar'

export default function SidebarBrand() {
  return (
    <SidebarHeader>
      <div className="flex items-center gap-2 px-2 py-1">
        {/* Logo */}
        <div className="flex size-8 items-center justify-center rounded-md bg-foreground text-xs font-bold text-background">
          FUN
        </div>

        {/* Name */}
        <span className="text-sm font-semibold">Admin Dashboard</span>
      </div>
    </SidebarHeader>
  )
}