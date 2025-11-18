"use client"
import { navItemList } from "@/lib/data/header-data"
import Image from "next/image"
import myLogo from "@/assets/logo.svg"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store-hook"
import { setIsCloseMenu } from "@/lib/redux/toggle.slice"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

const NavMobile = () => {
  const ref = useRef<HTMLUListElement>(null)
  const isOpenMenu = useAppSelector((state) => state.toggle.isOpenMenu)
  const dispatch = useAppDispatch()

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node) && isOpenMenu)
      dispatch(setIsCloseMenu())
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [dispatch, isOpenMenu])

  return (
    <>
      <ul ref={ref} className={cn("absolute w-11/12 -top-[1000px] left-1/2 -translate-x-1/2 bg-background gap-2 flex flex-col items-center p-4 shadow-md rounded-md transition-all duration-300 z-50", isOpenMenu && "top-2")}>
        <li className="size-12">
          <Image src={myLogo} alt="my logo" />
        </li>
        {
          navItemList.map(item => (
            <li key={item.value}
              onClick={() => dispatch(setIsCloseMenu())}
              className="py-2 transition-colors duration-300 active:text-primary">
              <a href={item.url}>
                <p className="capitalize">{item.title}</p>
              </a>
            </li>
          ))
        }
        <li className="mt-12">
          <Button
            variant="ghost"
            onClick={() => dispatch(setIsCloseMenu())}
            size="icon">
            <X className="text-destructive" />
          </Button>
        </li>
      </ul>
    </>
  )
}

export default NavMobile