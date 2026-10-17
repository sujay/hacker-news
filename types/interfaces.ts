export interface CommentProps {
  id: number;
  comments: CommentProps[] | null;
  content: string;
  time: number;
  user: string;
  // The hackerwebapp API also returns these fields.
  level?: number;
  time_ago?: string;
  // Legacy fields kept optional: the API does not always include them.
  by?: string;
  dead?: boolean;
  deleted?: boolean;
  text?: string;
}

// A single shape shared by the hackerwebapp list/item endpoints and the
// official Firebase item endpoint. Fields are optional because the two
// upstreams return different subsets.
export interface ItemProps {
  id: number;
  time: number;
  type?: string;
  title?: string;
  url?: string | null;
  // hackerwebapp list/item fields
  points?: number;
  user?: string;
  content?: string;
  comments?: CommentProps[] | null;
  comments_count?: number;
  // Firebase item fields
  score?: number;
  by?: string;
  text?: string;
  descendants?: number;
  dead?: boolean;
  deleted?: boolean;
  kids?: number[];
}

export interface SearchResultProps {
  objectID: string;
  points: number | null;
  title: string | null;
  created_at_i: number;
  num_comments: number | null;
  url: string | null;
  author: string | null;
}

export interface SearchResponse {
  hits: SearchResultProps[];
}

export interface ListItemProps {
  // Algolia returns story ids as strings; the other APIs as numbers.
  id: number | string;
  dead?: boolean;
  deleted?: boolean;
  points?: number;
  author?: string;
  time: number;
  commentCount?: number;
  title?: string;
}
