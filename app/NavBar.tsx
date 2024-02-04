import clsx from "clsx";
import NavLink from "./NavLink";
import CartCount from "./CartCount";

const NavBar = () => {
  const navLinks = [
    {
      path: "/",
      name: "Shopi",
    },
    {
      path: "/",
      name: "All",
    },
    {
      path: "/clothes",
      name: "Clothes",
    },
    {
      path: "/electronics",
      name: "Electronics",
    },
    {
      path: "/furnitures",
      name: "Furnitures",
    },
    {
      path: "/toys",
      name: "Toys",
    },
    {
      path: "/others",
      name: "Others",
    },
  ];

  const secondaryLinks = [
    {
      path: "/my-orders",
      name: "My Orders",
    },
    {
      path: "/my-account",
      name: "My Account",
    },
    {
      path: "/signin",
      name: "Sign In",
    },
  ];

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-gray-100/90 px-8 py-5 text-sm font-light shadow">
      <ul className="flex items-center gap-3">
        {navLinks.map((route) => (
          <li key={route.name}>
            <NavLink
              href={route.path}
              className={clsx({
                "font-semibold text-lg !no-underline": route.name === "Shopi",
              })}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="hidden items-center gap-3 lg:flex">
        {secondaryLinks.map((route) => (
          <li key={route.path}>
            <NavLink href={route.path}>{route.name}</NavLink>
          </li>
        ))}
        <CartCount />
      </ul>
    </nav>
  );
};

export default NavBar;
