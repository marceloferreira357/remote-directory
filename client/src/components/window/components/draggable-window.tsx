import { Rnd } from "react-rnd";

interface DraggableWindowProps {
  children: React.ReactNode;
}

function DraggableWindow({ children }: DraggableWindowProps) {
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
    >
      {children}
    </Rnd>
  );
}

export default DraggableWindow;
