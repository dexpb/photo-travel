import { motion, Variants } from "framer-motion";
import clsx from "clsx"; // Para combinar classes dinamicamente

interface AnimatedParagraphProps {
  text: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: { once?: boolean; amount?: number };
  className?: string;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  text,
  variants,
  initial = "hidden",
  whileInView = "show",
  viewport = { once: true, amount: 0.7 },
  className,
}) => {
  return ( 
    <motion.p
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={clsx("font-inter", className)} // Combina classes padrão com as customizadas
    >
      {text}
    </motion.p>
  );
};

export default AnimatedParagraph;
