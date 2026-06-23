'use client';

import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition">;

export default function Reveal({ children, delay = 0, className = '', ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.12 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.2, 0.8, 0.2, 1],
        delay: delay 
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
