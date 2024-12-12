import { useCallback } from "react";
import { Rnd } from "react-rnd";
import { Window } from "../../../common/types";
import { cn } from "../../../common/utils";
import useWindowsStore from "../../../stores/useWindowsStore";

interface DraggableWindowProps extends Pick<Window, "id" | "active"> {
  children: React.ReactNode;
}

function DraggableWindow({ id, active, children }: DraggableWindowProps) {
  const { activateWindow } = useWindowsStore((state) => state);

  const handleOnMouseDown = useCallback(
    (e: MouseEvent): void => {
      e.preventDefault();
      activateWindow(id);
    },
    [activateWindow]
  );

  return (
    <Rnd
      default={{
        x: 8,
        y: 8,
        width: 640,
        height: 480,
      }}
      dragHandleClassName="drag-handle"
      enableResizing={{
        top: false,
        bottom: false,
        left: false,
        right: false,
        bottomRight: true,
      }}
      onMouseDown={handleOnMouseDown}
      className={cn(active ? "z-50" : "z-40")}
    >
      {children}
    </Rnd>
  );
}

export default DraggableWindow;
