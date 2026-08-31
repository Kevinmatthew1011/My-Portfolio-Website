"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <Link
          href="#hero"
          onClick={closeMenu}
          className="group text-base font-semibold tracking-tight text-zinc-900 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
          aria-label="Kevin Matthew - Home"
        >
          <span>Kevin Matthew</span>
          <span className="text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-1.5 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        >
          {isOpen ? (
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-b border-zinc-200 bg-white px-6 pt-2 pb-6 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
