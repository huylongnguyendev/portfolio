import Link from 'next/link'
import { navItemList } from '../../lib/data/header-data'

const NavBar = () => {
  return (
    <>
      <ul className="flex items-center gap-6 font-semibold p-4 rounded-full bg-primary/10 backdrop-blur-md transition-shadow duration-300 shadow-primary hover:shadow-md max-md:absolute -top-[1000px]">
        {
          navItemList.map(item => (
            <li
              key={item.value}
              className="capitalize transition-colors duration-300 hover:text-primary"
            >
              <Link href={item.link}>
                {item.title}
              </Link>
          </li>
        ))
        }
      </ul>
    </>
  )
}

export default NavBar