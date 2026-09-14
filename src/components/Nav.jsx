import { useState } from 'react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const initiatives = [
  'BASIC/DEPT® Commerce',
  'BASIC/DEPT® Labs',
  'Sustainability',
  'Culture & Experience',
];

const offices = [
  'New York',
  'London',
  'Los Angeles',
  'Berlin',
  'Tokyo',
  'São Paulo',
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-neutral px-5.5 py-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-bold tracking-tighter text-xl uppercase no-underline">
          BASIC/DEPT®
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-bold tracking-widest no-underline opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest cursor-pointer group"
          aria-label="Toggle navigation menu"
        >
          <span className="w-2 h-2 rounded-full bg-secondary transition-transform group-hover:scale-125" />
          <span>{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-primary text-neutral flex flex-col justify-between px-5.5 py-24 md:px-12 md:py-28 transition-all duration-500 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <nav className="lg:col-span-7 flex flex-col space-y-2">
            <span className="text-xs uppercase font-mono text-neutral/50 mb-4 tracking-widest">
              Navigation
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter no-underline hover:text-secondary transition-colors duration-200"
              >
                <span className="text-sm font-mono align-top mr-4 text-neutral/40">
                  0{idx + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 self-end pt-8 lg:pt-0 border-t lg:border-t-0 border-neutral/15">
            <div className="space-y-3">
              <span className="block text-xs uppercase font-mono text-neutral/50 tracking-widest">
                Initiatives
              </span>
              <ul className="space-y-1.5 text-sm font-medium">
                {initiatives.map((item) => (
                  <li key={item} className="opacity-80 hover:opacity-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block text-xs uppercase font-mono text-neutral/50 tracking-widest">
                Offices
              </span>
              <ul className="space-y-1.5 text-sm font-medium">
                {offices.map((office) => (
                  <li key={office} className="opacity-80">
                    {office}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-neutral/15 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-neutral/50 space-y-2 sm:space-y-0">
          <span>BASIC/DEPT®, Inc ©2026</span>
          <span className="hover:text-neutral cursor-pointer transition-colors">
            biz@basicagency.com
          </span>
        </div>
      </div>
    </>
  );
}