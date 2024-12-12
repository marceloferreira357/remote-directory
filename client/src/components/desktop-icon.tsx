import { motion } from "motion/react";
import { IconType } from "react-icons";
import { FaFile } from "react-icons/fa";

interface DesktopIconProps {
  icon?: IconType;
  title?: string;
}

function DesktopIcon({ icon: Icon, title }: DesktopIconProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center w-fit gap-2 transition-all hover:bg-white/10 p-2 rounded-md h-fit"
    >
      <div className="text-4xl">{Icon ? <Icon /> : <FaFile />}</div>
      <div className="flex flex-row items-center justify-center rounded-full text-center bg-white/10 py-0.5 px-2">
        <span className="">{title}</span>
      </div>
    </motion.button>
  );
}

export default DesktopIcon;
