export enum CommentActions {
  ADD = "ADD_COMMENT",
  DELETE = "DElETE_COMMENT"
}

export interface CommentInterface {
  id: number;
  content: string;
  pokemon: number;
  timestamp: string;
}

export interface CommentAdd {
  type: CommentActions.ADD;
  data: CommentInterface;
}

export interface CommentDelete {
  type: CommentActions.DELETE;
  data: {
    pokemonId: number;
    commentId: number;
  };
}

export type CommentActionList = CommentAdd | CommentDelete;

export interface CommentState {
  byId: {
    [key: string]: CommentInterface;
  };
  allIds: number[];
}
