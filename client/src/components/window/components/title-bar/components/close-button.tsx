import { useCallback } from "react";
import { IoClose } from "react-icons/io5";
import { Window } from "../../../../../common/types";
import useWindowsStore from "../../../../../stores/useWindowsStore";
import ActionButton from "./action-button";

function CloseButton({ id }: Pick<Window, "id">) {
  const { toggleShow } = useWindowsStore((state) => state);

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      event.preventDefault();
      toggleShow(id);
    },
    [id, toggleShow]
  );

  return <ActionButton icon={IoClose} onClick={handleOnClick} />;
}

export default CloseButton;
