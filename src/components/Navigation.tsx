import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react"
import { Link } from "gatsby"
import React from "react"

interface NavigationComponentProps {
  activeKey: 'home' | 'about' | 'school';
}

const NavigationComponent: React.FC = (_props, { activeKey }: NavigationComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //   const menuItems = [
  //   "Home",
  //   "About",
  //   "Mes projets scolaires",
  // ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <Link color="foreground" to="/">
          <p className="font-bold text-inherit">Beverly</p>
        </Link>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem className="hidden sm:block" isActive={activeKey === 'home'}>
          <Link color="foreground" to="/">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeKey === 'about'}>
          <Link aria-current="page" to="/about-me">
            À propos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeKey === 'school'}>
          <Link color="foreground" to="/school">
            Projets scolaires
          </Link>
        </NavbarItem>
        {/* TODO: WIP Dôme page */}
        {/* <NavbarItem>
          <Link color="foreground" to="/dome">
            Dôme
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* TODO i18n */}
        {/* <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              FR
            </Button>
          </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to="#"
              size="lg"
              >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  )
}

export default NavigationComponent
