import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ LinkComponent = RouterLink, links = null }) {
  const [open, setOpen] = useState(false);

  // ✅ safe wrapper
  const SmartLink = ({ to, children, className = "", ...rest }) => {
    if (LinkComponent) {
      return (
        <LinkComponent to={to} className={className} {...rest}>
          {children}
        </LinkComponent>
      );
    }
    return (
      <a href={to} className={className} {...rest}>
        {children}
      </a>
    );
  };

  const defaultLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/destinations", label: "Destinations" },
    { to: "/tours", label: "Tours" },
    { to: "/auth", label: "Login", isButton: true },
  ];

  const navLinks = links ?? defaultLinks;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <SmartLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              NomadsOnWheels
            </span>
          </SmartLink>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) =>
              item.isButton ? (
                <SmartLink key={item.to} to={item.to}>
                  <button className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                    {item.label}
                  </button>
                </SmartLink>
              ) : (
                <SmartLink
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </SmartLink>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-3 transition-[max-height,opacity] duration-200 overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) =>
              item.isButton ? (
                <SmartLink key={item.to} to={item.to} className="block">
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                  >
                    {item.label}
                  </button>
                </SmartLink>
              ) : (
                <SmartLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition"
                >
                  {item.label}
                </SmartLink>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
