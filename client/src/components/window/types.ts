import { IconType } from "react-icons";
import { Window } from "../../common/types";

export interface BaseWindow extends Window {
  appIcon?: IconType;
  minimize?: boolean;
  maximize?: boolean;
  close?: boolean;
}
