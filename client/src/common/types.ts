export interface Position {
  x: number;
  y: number;
}

export interface Window {
  id: string;
  title: string;
  show: boolean;
  active: boolean;
  initialPosition: Position;
}
