import { FaFolder } from "react-icons/fa6";
import Window from "./components/window";

function App() {
  return (
    <div className="relative flex flex-row w-dvw h-dvh">
      <Window appIcon={FaFolder} title="test" minimize maximize close>
        <span>Hello, World!</span>
      </Window>
    </div>
  );
}

export default App;
