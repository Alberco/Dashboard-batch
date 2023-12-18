'use client'
import ThemeSwitcher from '@/tools/ThemeSwitcher'
import { AlignJustify, Home, LayoutDashboard, Radar, SearchCheck, Table } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function AsideComponent() {

  const [open,setOpen] = useState<boolean>(false)
  

  return (
    <>
      <nav className={`z-20 ${open ? 'block' : 'hidden' } md:block fixed left-1 inset-y-1 border-2 border-black/10 shadow-lg dark:border-white/30 dark:bg-transparent w-20 rounded-xl`}>
        <ul className='flex flex-col justify-between items-center h-full py-4'>
          <li>
            <p className='text-white font-bold'>
              <Link  href={"/"}>
                <Radar size={30} className='stroke-black dark:stroke-white ' />
              </Link>
            </p>
          </li>
          <ul className='flex flex-col gap-7'>
              <li>
                  <Link  href={"/"}>
                    <Home /> 
                  </Link>
              </li>
              <li>
                  <Link  href={"/dashboard"}>
                    <LayoutDashboard /> 
                  </Link>
              </li>
              <li>
                  <Link  href={"/table-bash"}>
                    <Table />
                  </Link>
              </li>
              <li>
                  <Link href={"/search-bash"}>
                    <SearchCheck />
                  </Link>
              </li>
          </ul>
          <li>
              <ThemeSwitcher />
          </li>
        </ul>
      </nav>
      <nav className='z-50 md:hidden fixed right-4 top-4 flex justify-start items-start'>
        <button className='p-2 bg-black rounded-full border-2 border-white/60' onClick={() => setOpen(!open)}>
            <AlignJustify />
        </button>
      </nav>
    </>
  )
}

export default AsideComponent