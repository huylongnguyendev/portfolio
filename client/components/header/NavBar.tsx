import { navItemList } from "@/lib/data/header-data"

const NavBar = () => {
  return (
    <>
      <ul className="max-md:hidden flex items-center gap-6 bg-background shadow-sm px-4 py-2 rounded-full transition-shadow duration-300 hover:shadow-primary">
        {
          navItemList.map(item => (
            <li key={item.value}
              className="transition-colors duration-300 hover:text-primary">
              <a href={item.url}>
                <p className="capitalize">{item.title}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default NavBar