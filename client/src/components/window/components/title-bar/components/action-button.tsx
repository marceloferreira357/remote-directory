import { motion } from "motion/react";
import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface ActionButtonProps extends ComponentProps<"button"> {
  icon: IconType;
}

function ActionButton({ icon: Icon, onClick }: ActionButtonProps) {
  return (
    <motion.button
      whileTap={{
        scale: 0.95,
      }}
      className="flex flex-row items-center justify-center p-1 rounded-full bg-slate-gray opacity-80 hover:opacity-100 transition-all"
      onClick={onClick}
    >
      <Icon />
    </motion.button>
  );
}

export default ActionButton;
