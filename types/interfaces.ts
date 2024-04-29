export type ListProps = number[];

export interface CommentProps {
  by: string;
  comments?: CommentProps[] | null;
  content: string;
  dead: boolean;
  deleted: boolean;
  id: number;
  text: string;
  time: number;
  user: string;
}

export interface ItemProps {
  comments_count: number;
  descendants: number;
  comments?: CommentProps[] | null;
  content?: string;
  text?: string;
  dead: boolean;
  deleted: boolean;
  id: number;
  points: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  user: string;
  by: string;
}

export interface UserProps {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted?: number[] | null;
}
