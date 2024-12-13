import { BaseWindow } from "../../types";
import ApplicationIcon from "./components/application-icon";
import BarContent from "./components/bar-content";
import CloseButton from "./components/close-button";
import MaximizeButton from "./components/maximize-button";
import MinimizeButton from "./components/minimize-button";

interface TitleBarProps
  extends Omit<BaseWindow, "show" | "active" | "initialPosition"> {
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

function TitleBar({
  id,
  appIcon,
  title,
  minimize,
  maximize,
  close,
  setFullScreen,
}: TitleBarProps) {
  return (
    <div className="relative flex flex-row items-center justify-between bg-arsenic p-2">
      <div className="absolute top-0 left-0 w-full h-full cursor-move drag-handle" />
      <BarContent>
        <ApplicationIcon icon={appIcon} />
        <span className="font-medium">{title}</span>
      </BarContent>
      <BarContent>
        {minimize && <MinimizeButton />}
        {maximize && <MaximizeButton setFullScreen={setFullScreen} />}
        {close && <CloseButton id={id} />}
      </BarContent>
    </div>
  );
}

export default TitleBar;
