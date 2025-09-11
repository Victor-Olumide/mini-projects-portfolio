import { navbar } from "../elements";
import GroupLink from "./GroupLink"

export default function DesktopNavbar() {
  const desktop = navbar.map((item, index) => (
    <GroupLink key={index} title={item.name} link={item.href} />
  ));

  return (
    <ul className="hidden md:flex justify-between text-white text-sm font-semibold bg-[#182239] px-16 py-4 gap-8">
      {desktop}
    </ul>
  );
}
