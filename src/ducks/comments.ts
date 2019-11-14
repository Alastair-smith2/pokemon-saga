import { createSelector } from "reselect";
import { deleteEntity } from "./base";
import {
  CommentActions,
  CommentAdd,
  CommentDelete,
  CommentInterface,
  CommentActionList,
  CommentState
} from "./types/comment-types";

export const createComment = (content: string, pokemon: number): CommentAdd => {
  return {
    type: CommentActions.ADD,
    data: {
      id: Math.floor(Math.random() * 100000000) + 1,
      content,
      pokemon,
      timestamp: new Date().toISOString()
    }
  };
};

// TODO - object
export const removeComment = (
  pokemonId: number,
  commentId: number
): CommentDelete => {
  return {
    type: CommentActions.DELETE,
    data: {
      pokemonId,
      commentId
    }
  };
};

const initialState: CommentState = {
  byId: {},
  allIds: []
};

const addComment = (
  Comment: CommentInterface,
  state: CommentState
): CommentState => {
  return {
    byId: {
      ...state.byId,
      [Comment.id]: Comment
    },
    allIds: [...state.allIds, Comment.id]
  };
};

const CommentReducer = (
  state = initialState,
  action: CommentActionList
): CommentState => {
  switch (action.type) {
    case CommentActions.ADD:
      return addComment(action.data, state);
    case CommentActions.DELETE:
      return deleteEntity<CommentInterface, CommentState>(
        action.data.commentId,
        state
      );
    default:
      return state;
  }
};

interface ReducerState {
  comments: CommentState;
}
const selectCommentById = (state: ReducerState) => state.comments.byId;

export const foundCommentById = (id: number) =>
  createSelector(
    selectCommentById,
    comment => comment[id]
  );

export default CommentReducer;
