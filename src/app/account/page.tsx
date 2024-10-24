"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Account() {
  return (
    <div className="bg-zinc-100/70 rounded-3xl p-3 h-full">
      <div className="flex gap-4 bg-white rounded-2xl p-4 h-full">
        <nav className="p-2 py-4">
          <ul className="flex flex-col gap-2 w-52 ">
            <li className="px-3 p-1 rounded-md hover:bg-zinc-100">Profile</li>
            <li className="px-3 p-1 rounded-md hover:bg-zinc-100">Alerts</li>
            <li className="px-3 p-1 rounded-md hover:bg-zinc-100">Normalize</li>
            <li className="px-3 p-1 rounded-md hover:bg-zinc-100">Account</li>
          </ul>
        </nav>
        <Separator orientation="vertical" />
        <div className="flex flex-col p-2 py-4 flex-1 gap-8 lg:max-w-2xl">
          <div className="space-y-2">
            <h3 className="text-lg">Profile</h3>
            <p className="text-sm text-zinc-500">This is how others will see you on the site.</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Username</Label>
            <Input placeholder="John Doe"/>
            <p className="text-xs text-zinc-500">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
          </div>

          
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="johndoe@example.com"/>
            <p className="text-xs text-zinc-500">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
          </div>

          <div className="space-y-2">
            <Label>Your Phone Number</Label>
            <Input placeholder="(55) 99999-9999"/>
            <p className="text-xs text-zinc-500">Enter a phone number to receive important service updates by SMS.</p>
          </div>


          <div className="space-y-2">
            <Label>Tunad ID</Label>
            <Input placeholder="#########" className="w-fit" value="#45dfsa$"/>
            <p className="text-xs text-zinc-500 ">Used when interacting with the Tunad API.</p>
          </div>

          <div className="space-y-2">
            <Button >
              Update Profile
            </Button>
          </div>

          
        </div>
      </div>
    </div>
  )
} 