import { useCallback, useEffect, useState } from "react";
import { DraggableData, Position, Rnd } from "react-rnd";
import { Window } from "../../../common/types";
import { cn } from "../../../common/utils";
import useWindowsStore from "../../../stores/useWindowsStore";
import { Direction, Size } from "./title-bar/types";

interface DraggableWindowProps
  extends Pick<Window, "id" | "active" | "initialPosition"> {
  children: React.ReactNode;
  fullScreen: boolean;
}

const DEFAULT_SIZE: Size = { width: 640, height: 480 };

function DraggableWindow({
  id,
  active,
  children,
  initialPosition,
  fullScreen,
}: DraggableWindowProps) {
  const [prevPosition, setPrevPosition] = useState<Position>(initialPosition);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [prevSize, setPrevSize] = useState<Size>(DEFAULT_SIZE);
  const [size, setSize] = useState<Size>(DEFAULT_SIZE);
  const { activateWindow } = useWindowsStore((state) => state);

  const handleMouseDown = useCallback(
    () => activateWindow(id),
    [activateWindow, id]
  );

  const handleResize = useCallback(
    (_: MouseEvent | TouchEvent, __: Direction, elementRef: HTMLElement) => {
      const { offsetWidth, offsetHeight } = elementRef;
      const newSize = { width: offsetWidth, height: offsetHeight };
      setPrevSize(newSize);
      setSize(newSize);
    },
    []
  );

  const handleDrag = useCallback(
    (_: any, data: DraggableData) => {
      if (fullScreen) {
        return;
      }

      const newPosition = { x: data.x, y: data.y };
      setPrevPosition(newPosition);
      setPosition(newPosition);
    },
    [fullScreen]
  );

  useEffect(() => {
    if (fullScreen) {
      setPrevSize(size);
      setSize({ width: "100%", height: "100%" });
      setPosition({ x: 0, y: 0 });
    } else {
      setSize(prevSize);
      setPosition(prevPosition);
    }
  }, [fullScreen, prevSize, prevPosition]);

  return (
    <Rnd
      default={{
        ...initialPosition,
        ...DEFAULT_SIZE,
      }}
      dragHandleClassName="drag-handle"
      enableResizing={{
        top: false,
        bottom: false,
        left: false,
        right: false,
        bottomRight: true,
      }}
      disableDragging={fullScreen}
      onDrag={handleDrag}
      onMouseDown={handleMouseDown}
      onResize={handleResize}
      size={size}
      position={position}
      className={cn(active ? "z-50" : "z-40")}
    >
      {children}
    </Rnd>
  );
}

export default DraggableWindow;
