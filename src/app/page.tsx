"use client"

import * as React from "react"

import { DataTableDemo } from "@/components/demo-table"

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-2 gap-y-11">
      <div className="col-span-2">
        <h2 className="text-4xl">My Spots</h2>
      </div>
      <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
        <div className="rounded-2xl bg-white p-2 px-3 ">
          <DataTableDemo />
        </div>
      </div>

      <div className="bg-zinc-100/70 rounded-3xl p-3">
      </div>
    </div>
  )
}

