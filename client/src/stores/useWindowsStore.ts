import { create } from "zustand";
import { Window } from "../common/types";

const useWindowsStore = create<{
  windows: Window[];
  addWindow: (window: Window) => void;
  toggleShow: (windowId: string) => void;
  activateWindow: (windowId: string) => void;
  deactivateWindows: () => void;
  removeWindow: (windowId: string) => void;
}>((set) => ({
  windows: [],
  addWindow: (window: Window) =>
    set((state) => ({
      windows: [
        ...state.windows.map((window) => ({ ...window, active: false })),
        window,
      ],
    })),
  toggleShow: (windowId: string) =>
    set((state) => ({
      windows: state.windows.map((window) => ({
        ...window,
        show: window.id === windowId ? !window.show : window.show,
      })),
    })),
  activateWindow: (windowId: string) =>
    set((state) => ({
      windows: state.windows.map((window) => ({
        ...window,
        active: window.id === windowId ? true : false,
      })),
    })),
  deactivateWindows: () =>
    set((state) => ({
      windows: state.windows.map((window) => ({ ...window, active: false })),
    })),
  removeWindow: (windowId: string) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== windowId),
    })),
}));

export default useWindowsStore;
