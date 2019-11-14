import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment, foundCommentById } from "../../ducks/comments";

interface CommentProps {
  commentId: number;
  pokemonId: number;
}
const Comment: React.FC<CommentProps> = ({
  commentId,
  pokemonId
}): JSX.Element => {
  const { content, timestamp } = useSelector(foundCommentById(commentId));
  const dispatch = useDispatch();
  return (
    <div
      className="comment-item"
      onClick={() => dispatch(removeComment(pokemonId, commentId))}
    >
      {content} - {timestamp}
    </div>
  );
};

export default Comment;
