export type ListProps = number[];

export interface ItemProps {
  by: string;
  descendants: number;
  deleted: boolean;
  dead: boolean;
  id: number;
  kids?: number[] | null;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
}

export interface CommentProps {
  id: number;
  deleted: boolean;
  dead: boolean;
  by: string;
  time: number;
  text: string;
  kids?: number[] | null;
}

export interface UserProps {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted?: number[] | null;
}
