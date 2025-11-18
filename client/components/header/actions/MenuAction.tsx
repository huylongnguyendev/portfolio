"use client"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store-hook"
import { setIsOpenMenu } from "@/lib/redux/toggle.slice"
import { Menu } from "lucide-react"

const MenuAction = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => dispatch(setIsOpenMenu())}
        className="cursor-pointer hover:border-primary active:border-primary group">
        <Menu className="transition-colors duration-300 group-hover:text-primary group-active:text-primary" />
      </Button>
    </>
  )
}

export default MenuAction