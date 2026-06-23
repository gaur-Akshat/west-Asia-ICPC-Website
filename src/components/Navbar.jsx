import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../data/constants";

// Chevron Down Icon
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down ml-1 h-4 w-4 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Menu Icon
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-menu h-6 w-6"
    aria-hidden="true"
  >
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// Desktop dropdown item
function DropdownMenu({ link }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center text-slate-700 font-medium hover:text-indigo-600 cursor-pointer py-2 px-2 lg:px-3 xl:px-4 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap bg-transparent border-none"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{link.label}</span>
        <ChevronDown />
      </button>

      {open && link.dropdownItems && (
        <div className="absolute top-full left-0 mt-0 bg-white border border-slate-200 shadow-lg rounded-sm z-[200] min-w-[160px]">
          {link.dropdownItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const toggleMobileDropdown = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="bg-[#FAF9F6]/80 backdrop-blur-md shadow-sm sticky top-0 z-[100] border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <Link className="flex-shrink-0" to="/">
              <span className="text-slate-900 tracking-tight text-sm sm:text-base lg:text-xl font-bold whitespace-nowrap">
                <span className="hidden sm:inline">
                  ICPC Asia West Continent <br /> Championship
                </span>
                <span className="sm:hidden">ICPC AWC</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center">
                <div className="relative">
                  {link.hasDropdown ? (
                    <DropdownMenu link={link} />
                  ) : (
                    <Link
                      className="text-slate-700 font-medium hover:text-indigo-600 py-2 px-2 lg:px-3 xl:px-4 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
                {idx < navLinks.length - 1 && (
                  <div className="h-6 w-px bg-slate-300 mx-1 lg:mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-slate-700 hover:text-indigo-600 focus:outline-none p-2"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    className="w-full text-left py-2 px-3 text-sm text-slate-700 font-medium hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors flex items-center justify-between"
                    onClick={() => toggleMobileDropdown(link.label)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown />
                  </button>
                  {mobileExpanded === link.label && link.dropdownItems && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block py-2 px-3 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileExpanded(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-2 px-3 text-sm text-slate-700 font-medium hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
