"use client"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks/createStore"
import { setOpenMenu } from "@/lib/redux/toggle.slice"
import { Menu } from "lucide-react"

const MenuAction = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Button
        variant={"outline"}
        size={"icon"}
        className="md:hidden"
        onClick={() => dispatch(setOpenMenu())}
      >
        <Menu />
      </Button>
    </>
  )
}

export default MenuAction