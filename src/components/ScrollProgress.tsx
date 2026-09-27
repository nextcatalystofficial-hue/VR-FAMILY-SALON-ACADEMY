import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B88E38] via-[#F3D78A] to-[#C59B43] shadow-[0_1px_10px_rgba(200,169,107,0.5)] origin-left z-50 pointer-events-none"
    />
  );
}
