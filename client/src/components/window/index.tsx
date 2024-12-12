import { Rnd } from "react-rnd";
import TitleBar from "./components/title-bar";
import { BaseWindow } from "./types";

interface WindowProps extends BaseWindow {
  children: React.ReactNode;
}

function Window({
  appIcon,
  title,
  minimize,
  maximize,
  close,
  children,
}: WindowProps) {
  return (
    <Rnd
      default={{
        x: 8,
        y: 8,
        width: 640,
        height: 480,
      }}
      bounds="parent"
      dragHandleClassName="handle"
      enableResizing={{
        top: false,
        bottom: false,
        left: false,
        right: false,
        bottomRight: true,
      }}
      className="flex flex-col bg-quartz rounded-md shadow-md overflow-hidden w-full h-full"
    >
      <TitleBar
        appIcon={appIcon}
        title={title}
        minimize={minimize}
        maximize={maximize}
        close={close}
      />
      {children}
    </Rnd>
  );
}

export default Window;
