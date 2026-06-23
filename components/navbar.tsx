"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavItem {
  name: string;
}

interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  defaultPath?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: Record<string, NavItem> = {
  "/": { name: "home" },
  "#tracks": { name: "tracks" },
  "#internships": { name: "internships" },
  "#open-source": { name: "open source" },
};

export function MorphicNavbar({
  items = DEFAULT_NAV_ITEMS,
  defaultPath = "/",
  className,
}: MorphicNavbarProps) {
  const [activePath, setActivePath] = useState(defaultPath);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath === path;
  };

  return (
    <nav className={clsx("transition-all duration-300 w-full", scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "py-4", className)}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/img/first-commit-icon-square.png" 
            alt="First Commit Logo" 
            width={32} 
            height={32} 
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className="font-bold text-lg hidden sm:block">First Commit</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-center">
          <div className="glass flex items-center justify-between overflow-hidden rounded-xl">
            {Object.entries(items).map(([path, { name }], index, array) => {
              const isActive = isActiveLink(path);
              const isFirst = index === 0;
              const isLast = index === array.length - 1;
              const prevPath = index > 0 ? array[index - 1][0] : null;
              const nextPath = index < array.length - 1 ? array[index + 1][0] : null;

              const Wrapper = path.startsWith("#") ? "a" : Link;

              return (
                <Wrapper
                  key={path}
                  href={path}
                  onClick={() => setActivePath(path)}
                  className={clsx(
                    "flex items-center justify-center bg-black/50 p-1.5 px-4 text-sm text-white/70 transition-all duration-300 ease-out hover:text-white outline-none focus:outline-none",
                    isActive
                      ? "mx-2 rounded-xl font-semibold bg-white/10 text-white"
                      : clsx(
                          (isActiveLink(prevPath || "") || isFirst) && "rounded-l-xl",
                          (isActiveLink(nextPath || "") || isLast) && "rounded-r-xl"
                        )
                  )}
                >
                  {name}
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <Link 
            href="#get-started" 
            className="text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] px-5 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
