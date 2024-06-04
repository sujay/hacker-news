export type ListProps = number[];

export interface CommentProps {
  by: string;
  comments: CommentProps[] | [];
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

export interface SearchResult {
  objectID: number;
  points: number;
  title: string;
  created_at_i: number;
  num_comments: number;
  url: string;
  author: string;
}

export interface ListItemProps {
  id: number;
  url: string;
  dead: boolean;
  deleted: boolean;
  points: number;
  author: string;
  time: number;
  commentCount: number;
  title: string;
}
