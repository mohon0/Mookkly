'use client';

import { useEffect, useRef, useState } from 'react';

const tabs = [
  'Overview',
  'Integrations',
  'Activity',
  'Domains',
  'Usage',
  'Monitoring',
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: '0px', width: '0px' });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  return (
    <div className="relative hidden w-full items-center justify-center border-none shadow-none md:flex">
      <div className="p-0">
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="absolute flex items-center rounded-[6px] bg-[#0e0f1114] transition-all duration-300 ease-out"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          <div
            className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] transition-all duration-300 ease-out dark:bg-white"
            style={activeStyle}
          />

          {/* Tabs */}
          <div className="relative flex items-center space-x-[6px]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={`cursor-pointer px-3 py-2 transition-colors duration-300 ${
                  index === activeIndex
                    ? 'text-[#0e0e10] dark:text-white'
                    : 'text-[#0e0f1199] dark:text-[#ffffff99]'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex h-full items-center justify-center text-sm leading-5 whitespace-nowrap">
                  {tab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
