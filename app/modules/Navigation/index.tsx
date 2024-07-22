import { Navbar } from "./Navbar";
import { NavMenu } from "./NavMenu";

export function Navigation() {
  return (
    <>
      <div className="lg:hidden">
        <NavMenu />
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </>
  );
}
