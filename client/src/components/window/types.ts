import { IconType } from "react-icons";

export interface BaseWindow {
  appIcon?: IconType;
  title?: string;
  minimize?: boolean;
  maximize?: boolean;
  close?: boolean;
}
