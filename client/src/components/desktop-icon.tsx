import { motion } from "motion/react";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { FaFile } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Position } from "../common/types";
import useWindowsStore from "../stores/useWindowsStore";

interface DesktopIconProps {
  icon?: IconType;
  title?: string;
}

function DesktopIcon({ icon: Icon, title }: DesktopIconProps) {
  const { addWindow } = useWindowsStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      event.stopPropagation();

      const buttonElement = event.currentTarget;
      const rect = buttonElement.getBoundingClientRect();

      const initialPosition: Position = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      const id = uuidv4();

      addWindow({
        id,
        title: title ?? "",
        show: true,
        active: true,
        initialPosition,
      });
    },
    [addWindow, title]
  );

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center w-fit gap-2 transition-all hover:bg-cadet-grey/10 p-2 rounded-md h-fit"
      onClick={handleOnClick}
    >
      <div className="text-4xl">{Icon ? <Icon /> : <FaFile />}</div>
      <div className="flex flex-row items-center justify-center rounded-full text-center bg-cadet-grey/10 py-0.5 px-2">
        <span className="">{title}</span>
      </div>
    </motion.button>
  );
}

export default DesktopIcon;
