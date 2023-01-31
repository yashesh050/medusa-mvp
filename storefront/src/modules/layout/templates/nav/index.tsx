import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        // "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative  mx-auto transition-colors bg-transparent border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200 px-20 py-16",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            // {
            //   "text-white group-hover:text-gray-900": isHome && !isScrolled,
            // }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center ">
            <div className="block small:hidden">
              {/* <Hamburger setOpen={toggle} /> */}
            </div>
            <div className="hidden small:contents h-full ">
              {/* <DropdownMenu /> */}
              <div className="fenologo">
                <Image
                  src="/fenoLogo.png"
                  width="80px"
                  height="32px"
                  //layout="fill"
                  loading="eager"
                  priority={true}
                  quality={90}
                  objectFit="contain"
                  //alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                  className="absolute inset-0"
                //draggable="false"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link href="/">
              {/* <a className="text-xl-semi uppercase">Acme</a> */}
              <a className="pageTitle font-semibold text-2xl text-[#2C2F32]">Checkout Pages</a>
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <CartDropdown />
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                {/* <a>Account</a> */}
                <a><Image
                  src="/menu.png"
                  width="32px"
                  height="21px"

                /></a>
              </Link>
            </div>

          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
