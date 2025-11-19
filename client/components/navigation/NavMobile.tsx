"use client"
import { navItemList } from '@/lib/data/header-data'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.svg'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/createStore'
import { setCloseMenu } from '@/lib/redux/toggle.slice'
import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

const NavMobile = () => {
  const ref = useRef<HTMLUListElement>(null)
  const isOpenMenu = useAppSelector((state) => state.toggle.isOpenMenu)
  const dispatch = useAppDispatch()

  const handleClickOutSide = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node))
      dispatch(setCloseMenu())
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutSide)
    return () => window.removeEventListener("mousedown", handleClickOutSide)
  }, [dispatch])

  return (
    <>
      <ul ref={ref} className={cn("flex flex-col w-full mx-auto bg-background p-4 rounded-md shadow-lg absolute -top-[1000px] left-0 transition-all duration-300", isOpenMenu && "top-0")}>
        <li className="flex justify-between items-center mb-4">
          <Image src={logo} alt="logo" width={32} height={32} />
          <Button
            variant="ghost"
            size={"icon"}
            onClick={() => dispatch(setCloseMenu())}
          >
            <X className="text-destructive" />
          </Button>
        </li>
        {
          navItemList.map(item => (
            <li
              key={item.value}
              onClick={() => dispatch(setCloseMenu())}
            >
              <Link href={item.link} className="inline-flex size-full justify-center items-center py-4 rounded-md capitalize transition-colors duration-300 active:bg-secondary">
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default NavMobile