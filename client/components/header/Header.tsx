import Interactive from "./Interactive"
import Logo from "./Logo"
import NavBar from "./NavBar"
import NavMobile from "./NavMobile"

const Header = () => {
  return (
    <>
      <header className="fixed w-full top-0 left-0 py-1 px-4 md:px-24 lg:px-32 bg-background backdrop-blur-md">
        <nav className="flex justify-between items-center">
          <Logo />
          <NavBar />
          <NavMobile />
          <Interactive />
        </nav>
      </header>
    </>
  )
}

export default Header