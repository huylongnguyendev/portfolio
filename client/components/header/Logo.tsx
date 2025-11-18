import Image from "next/image"
import Link from "next/link"
import myLogo from "@/assets/logo.svg"

const Logo = () => {
  return (
    <>
      <div className="logo">
        <Link href={"#"}>
          <Image src={myLogo} alt="my logo" className="size-12 md:size-14" />
        </Link>
      </div>
    </>
  )
}

export default Logo