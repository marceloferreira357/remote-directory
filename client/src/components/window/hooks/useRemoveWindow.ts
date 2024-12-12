import { useEffect } from "react";
import { Window } from "../../../common/types";
import useWindowsStore from "../../../stores/useWindowsStore";

const useRemoveWindow = ({ show, id }: Omit<Window, "title">) => {
  const { removeWindow } = useWindowsStore((state) => state);

  useEffect(() => {
    let removeWindowTimeout: number;
    if (!show) {
      removeWindowTimeout = setTimeout(() => {
        removeWindow(id);
      }, 200);
    }

    return () => {
      if (removeWindowTimeout) {
        clearTimeout(removeWindowTimeout);
      }
    };
  }, [show]);
};

export default useRemoveWindow;
