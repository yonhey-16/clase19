"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/miniapps/corazon", label: "Corazón" },
    { href: "/miniapps/Rompecabezas", label: "Rompecabezas" },
    { href: "/miniapps/ajedrez", label: "Ajedrez" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white flex justify-center gap-6 p-4 shadow-md z-50">
      {links.map((link) => {
        const isActive = path === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium transition-colors ${
              isActive ? "underline text-yellow-300" : "hover:text-gray-200"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
