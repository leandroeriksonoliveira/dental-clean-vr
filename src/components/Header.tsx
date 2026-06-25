"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1B3A6B] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
              <path
                d="M20 6C14 6 8 10 8 17c0 4 1.5 7 3 9.5C13.5 30 15 34 20 34s6.5-4 9-7.5c1.5-2.5 3-5.5 3-9.5C32 10 26 6 20 6z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M20 10c-2 0-4 1-5 2.5 1 .5 2 .8 3 .8 1.5 0 3-.5 4-1.2C21.5 10.5 20.8 10 20 10z"
                fill="#0EA5E9"
              />
            </svg>
          </div>
          <div>
            <span
              className={`font-bold text-lg leading-none block transition-colors ${
                scrolled ? "text-[#1B3A6B]" : "text-white"
              }`}
            >
              Dental Clean
            </span>
            <span
              className={`text-xs font-medium transition-colors ${
                scrolled ? "text-[#0EA5E9]" : "text-sky-300"
              }`}
            >
              Volta Redonda · RJ
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-[#0EA5E9] transition-colors ${
                scrolled ? "text-[#1B3A6B]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2433463474"
            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all ${
              scrolled
                ? "bg-[#1B3A6B] text-white hover:bg-[#2A5298]"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            }`}
          >
            <Phone size={14} />
            (24) 3346-3474
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1B3A6B]" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1B3A6B] font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:2433463474"
              className="flex items-center gap-2 text-white bg-[#1B3A6B] font-semibold py-2 px-3 rounded-lg mt-2 hover:bg-[#2A5298] transition-colors"
            >
              <Phone size={14} />
              (24) 3346-3474
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
