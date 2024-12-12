import { FaFolder } from "react-icons/fa6";
import DesktopIcon from "./components/desktop-icon";
import Window from "./components/window";

function App() {
  return (
    <div className="relative flex flex-row w-dvw h-dvh">
      <div className="flex flex-wrap flex-col gap-2 p-2">
        <DesktopIcon icon={FaFolder} title="dir1" />
      </div>
      <Window appIcon={FaFolder} title="test" minimize maximize close>
        <span>Hello, World!</span>
      </Window>
    </div>
  );
}

export default App;
