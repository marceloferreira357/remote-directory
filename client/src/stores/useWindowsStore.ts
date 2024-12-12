import { create } from "zustand";
import { Window } from "../common/types";

const useWindowsStore = create<{
  windows: Window[];
  addWindow: (window: Window) => void;
  toggleShow: (windowId: string) => void;
  removeWindow: (windowId: string) => void;
}>((set) => ({
  windows: [],
  addWindow: (window: Window) =>
    set((state) => ({ windows: [...state.windows, window] })),
  toggleShow: (windowId: string) =>
    set((state) => ({
      windows: state.windows.map((window) => ({
        ...window,
        show: window.id === windowId ? !window.show : window.show,
      })),
    })),
  removeWindow: (windowId: string) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== windowId),
    })),
}));

export default useWindowsStore;
