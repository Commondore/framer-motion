import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: 200, opacity: 0 },
  close: { x: -200, opacity: 0 },
};
