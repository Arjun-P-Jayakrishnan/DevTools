import { NAV_LINKS } from "@/constants";
import NavbarRoot from "../Molecules/Navbar/Navbar";

export function Navbar() {
  return (
    <nav
      className={`h-[8vh] w-full text-primary flex flex-row justify-between items-center border-b-2 relative z-30 py-0.1 px-4`}
    >
      <NavbarRoot>
        <NavbarRoot.Leading />
        <NavbarRoot.Options options={NAV_LINKS} />
        <NavbarRoot.Trailing />
      </NavbarRoot>
    </nav>
  );
}

export default Navbar;
