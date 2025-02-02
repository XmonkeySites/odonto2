import { motion } from "framer-motion";

export function AnimatedText() {
  return (
    <motion.span
      className="font-semibold text-[18px] text-[#6B6B6B] opacity-80 relative xl:text-[20px]"
      initial={{ opacity: 0.3, x: -30 }}
      animate={{ opacity: 1, x: 30 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      Tratamentos e Serviços
    </motion.span>
  );
}
