import { Button } from "@/components/ui/button"
import { contactList } from "@/lib/data/header-data"
import Link from "next/link"


const ContactAction = () => {
  return (
    <>
      {
        contactList.map(item => (
          <Button
            key={item.value}
            variant={"ghost"}
            size={"icon"}
          >
            <Link href={item.url} target="_blank" className="text-primary">
              <item.icon />
            </Link>
          </Button>
        ))
      }
    </>
  )
}

export default ContactAction