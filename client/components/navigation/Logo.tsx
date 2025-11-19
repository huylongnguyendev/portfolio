import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"

const Logo = () => {
  return (
    <>
      <div className="logo">
        <Link href={"#"}>
          <Image src={logo} width={44} height={44} alt="logo"/>
        </Link>
      </div>
    </>
  )
}

export default Logo