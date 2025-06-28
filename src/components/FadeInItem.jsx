// components/FadeInItem.jsx
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FadeInItem = ({ children, index = 1, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default FadeInItem;
