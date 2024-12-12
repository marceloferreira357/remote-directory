import { FaFolder } from "react-icons/fa6";
import DesktopIcon from "./components/desktop-icon";
import Window from "./components/window";
import useWindowsStore from "./stores/useWindowsStore";

function App() {
  const { windows } = useWindowsStore((state) => state);

  return (
    <div className="relative flex flex-row w-dvw h-dvh">
      <div className="flex flex-wrap flex-col gap-2 p-2">
        <DesktopIcon icon={FaFolder} title="dir1" />
      </div>
      {windows.map(({ id, title, show, active }) => (
        <Window
          key={id}
          id={id}
          appIcon={FaFolder}
          title={title}
          minimize
          maximize
          close
          show={show}
          active={active}
        >
          <span>Hello, World!</span>
        </Window>
      ))}
    </div>
  );
}

export default App;
