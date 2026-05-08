import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function StatItem({ value, label, colorClass }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`font-bold text-base leading-none tabular-nums ${colorClass}`}>{value}</span>
      <span className="text-[10px] leading-none text-gray-500 dark:text-gray-400 whitespace-nowrap tracking-wide">
        {label}
      </span>
    </div>
  );
}

function StatDivider() {
  return <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0" />;
}

export default function SiteHeader({ siteInfo }) {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-2xl border-gray-200/50 dark:border-gray-700/50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_2px_8px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5),0_2px_8px_-4px_rgba(0,0,0,0.4)]'
          : 'bg-gray-50 dark:bg-gray-950 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/*
          Mobile  (< md): flex, 2 visible items — title+badge left, toggle right.
          Desktop (≥ md): CSS grid 3 equal outer columns so stats are always
                          centered regardless of left/right content width.
        */}
        <div
          className={`
            flex items-center justify-between gap-3
            md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-0
            transition-all duration-300 ease-in-out
            ${scrolled ? 'py-2.5' : 'py-3.5 md:py-4'}
          `}
        >

          {/* ── ZONE 1: title + location ── */}
          <div className="min-w-0 flex flex-col justify-center">

            {/* Row: site name + online badge */}
            <div className="flex items-center gap-2 min-w-0">
              <h1
                className={`
                  font-bold leading-none text-gray-900 dark:text-white truncate
                  transition-all duration-300 ease-in-out
                  ${scrolled ? 'text-sm md:text-[15px]' : 'text-[15px] md:text-xl lg:text-2xl'}
                `}
              >
                {siteInfo.siteName}
              </h1>

              <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-[3px] rounded-full bg-green-50 dark:bg-green-950/80 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 text-[9px] font-bold tracking-widest uppercase leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse flex-shrink-0" />
                Online
              </span>
            </div>

            {/* Location — collapses smoothly on scroll */}
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${scrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-4 opacity-100 mt-1.5'}
              `}
            >
              <p className="text-[11px] leading-none text-gray-500 dark:text-gray-400 truncate">
                📍 {siteInfo.location}
              </p>
            </div>
          </div>

          {/* ── ZONE 2: stats — desktop only, centered in grid ── */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 md:px-6">
            <StatItem
              value={siteInfo.totalPanels}
              label="Total Panels"
              colorClass="text-amber-500 dark:text-amber-400"
            />
            <StatDivider />
            <StatItem
              value={siteInfo.activePanels}
              label="Active Panels"
              colorClass="text-green-600 dark:text-green-400"
            />
            <StatDivider />
            <StatItem
              value={`${siteInfo.installedCapacityKW} kW`}
              label="Capacity"
              colorClass="text-amber-500 dark:text-amber-400"
            />
          </div>

          {/* ── ZONE 3: theme toggle — right-anchored ── */}
          <div className="flex items-center justify-end flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`
                flex items-center justify-center rounded-xl
                bg-gray-100 dark:bg-gray-800
                text-gray-600 dark:text-gray-300
                border border-gray-200 dark:border-gray-700
                hover:bg-gray-200 dark:hover:bg-gray-700
                hover:border-gray-300 dark:hover:border-gray-600
                active:scale-95
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-amber-500 focus-visible:ring-offset-2
                focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950
                transition-all duration-200 ease-in-out cursor-pointer
                ${scrolled ? 'p-2' : 'p-2.5'}
              `}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
