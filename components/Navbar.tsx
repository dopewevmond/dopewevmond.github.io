"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b bg-[#f5f2eb]/80 backdrop-blur-sm z-50">
      <div
        className={cn(
          "md:container flex flex-col md:flex-row md:gap-4 md:h-16 max-h-16 md:items-center md:justify-between relative transition-all",
          isNavOpen ? "h-screen max-h-[110vh]" : ""
        )}
      >
        <Link
          href="/"
          className="pl-8 md:pl-0 text-xl font-bold tracking-tight py-4 md:py-0"
        >
          EDMUND W.
        </Link>

        <nav
          className={cn(
            "md:flex md:flex-row",
            isNavOpen ? "navbar-opened flex flex-col" : "hidden md:flex",
            "px-8 lg:px-0 flex-1 md:grow-0 md:shrink-0 gap-2 md:gap-6 self-start md:self-center w-full md:w-auto bg-[#f5f2eb] md:bg-transparent"
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors py-4 md:py-0"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsNavOpen((currentState) => !currentState)}
          className="absolute top-4 right-4 md:hidden items-center justify-center p-1 flex flex-col gap-2"
        >
          <span
            className={cn(
              "w-8 h-[2px] shrink-0 grow-0 bg-black transition-all",
              isNavOpen ? "rotate-45 translate-y-2" : ""
            )}
          ></span>
          <span
            className={cn(
              "w-8 h-[2px] shrink-0 grow-0 bg-black transition-all",
              isNavOpen ? "opacity-0" : ""
            )}
          ></span>
          <span
            className={cn(
              "w-8 h-[2px] shrink-0 grow-0 bg-black transition-all",
              isNavOpen ? "-rotate-45 -translate-y-2" : ""
            )}
          ></span>
        </button>
      </div>
    </header>
  );
}
