import MenuAction from "./actions/MenuAction"
import Interactive from "./Interactive"
import Logo from "./Logo"
import NavBar from "./NavBar"
import NavMobile from "./NavMobile"

const Header = () => {
  return (
    <>
      <header className="fixed w-full top-0 left-0 px-4 md:px-24 lg:px-32 py-4 z-50 bg-background/10 backdrop-blur-md">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MenuAction />
            <Logo />
          </div>
          <NavBar />
          <NavMobile />
          <Interactive />
        </nav>
      </header>
    </>
  )
}

export default Header