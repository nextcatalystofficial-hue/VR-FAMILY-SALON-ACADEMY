import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer fine devices (desktops/laptops with mouse) and not touch
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clickable = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor-hover]');
      setIsHoveringClickable(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B88E38] pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHoveringClickable ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.1 }}
      />
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#B88E38]/70 pointer-events-none z-50 shadow-[0_0_10px_rgba(184,142,56,0.3)]"
        animate={{
          x: mousePosition.x - (isHoveringClickable ? 22 : 14),
          y: mousePosition.y - (isHoveringClickable ? 22 : 14),
          width: isHoveringClickable ? 44 : 28,
          height: isHoveringClickable ? 44 : 28,
          backgroundColor: isHoveringClickable ? 'rgba(184, 142, 56, 0.12)' : 'transparent',
          borderColor: isHoveringClickable ? '#B88E38' : 'rgba(184, 142, 56, 0.5)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
}
