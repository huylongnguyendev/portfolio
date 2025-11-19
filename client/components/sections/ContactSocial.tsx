import { Button } from "../ui/button"
import Link from "next/link"
import { contactList } from "@/lib/data/header-data"

const ContactSocial = () => {
  return (
    <>
      <div className="space-x-4 mb-8">
        {
          contactList.map(item => (
            <Button
              key={item.value}
              size={"icon"}
            >
              <Link href={item.url} target="_blank">
                <item.icon />
              </Link>
            </Button>
          ))
        }
      </div>
    </>
  )
}

export default ContactSocial