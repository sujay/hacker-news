export interface ListProps {
  list?: (number)[] | null;
}
export interface ItemProps {
  by: string;
  descendants: number;
  deleted: boolean;
  id: number;
  kids?: (number)[] | null;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
}
export interface UserProps {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted?: (number)[] | null;
}
