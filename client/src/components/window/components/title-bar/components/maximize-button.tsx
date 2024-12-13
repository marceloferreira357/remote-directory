import { useCallback } from "react";
import { LuMaximize2 } from "react-icons/lu";
import ActionButton from "./action-button";

interface MaximizeButtonProps {
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MaximizeButton({ setFullScreen }: MaximizeButtonProps) {
  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      setFullScreen((prev) => !prev);
    },
    [setFullScreen]
  );

  return <ActionButton icon={LuMaximize2} onClick={handleOnClick} />;
}

export default MaximizeButton;
