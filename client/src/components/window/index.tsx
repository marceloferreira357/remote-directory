import { AnimatePresence, motion } from "motion/react";
import DraggableWindow from "./components/draggable-window";
import TitleBar from "./components/title-bar";
import useRemoveWindow from "./hooks/useRemoveWindow";
import { BaseWindow } from "./types";

interface WindowProps extends BaseWindow {
  children: React.ReactNode;
}

function Window({
  id,
  appIcon,
  title,
  minimize,
  maximize,
  close,
  show,
  children,
}: WindowProps) {
  useRemoveWindow({ show, id });

  return (
    <DraggableWindow>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              type: "keyframes",
              duration: 0.2,
            }}
            className="flex flex-col bg-quartz rounded-md shadow-md overflow-hidden w-full h-full"
          >
            <TitleBar
              id={id}
              appIcon={appIcon}
              title={title}
              minimize={minimize}
              maximize={maximize}
              close={close}
            />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </DraggableWindow>
  );
}

export default Window;
