"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GroupLink({ title, link }) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={link} className={pathname === link ? "text-red-600 font-bold" : ""}>{title}</Link>
    </li>
  );
}
