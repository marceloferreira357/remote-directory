import { useCallback } from "react";
import { FaFolder } from "react-icons/fa6";
import DesktopIcon from "./components/desktop-icon";
import Window from "./components/window";
import useWindowsStore from "./stores/useWindowsStore";

function App() {
  const { windows, deactivateWindows } = useWindowsStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      event.preventDefault();
      deactivateWindows();
    },
    []
  );

  return (
    <div className="relative flex flex-row w-dvw h-dvh" onClick={handleOnClick}>
      <div className="flex flex-wrap flex-col gap-2 p-2">
        <DesktopIcon icon={FaFolder} title="dir1" />
      </div>
      {windows.map((window) => (
        <Window
          key={window.id}
          appIcon={FaFolder}
          minimize
          maximize
          close
          {...window}
        >
          <span>Hello, World!</span>
        </Window>
      ))}
    </div>
  );
}

export default App;
