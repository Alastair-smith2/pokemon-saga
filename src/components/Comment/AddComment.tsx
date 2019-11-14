import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../ducks/comments";

interface CommentProps {
  id: number;
}
const AddComment: React.FC<CommentProps> = ({ id }): JSX.Element => {
  const [searchValue, updateValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="add-comment">
      <textarea
        value={searchValue}
        onChange={e => updateValue(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => dispatch(createComment(searchValue, id))}
      >
        Add comment
      </button>
    </div>
  );
};

export default AddComment;
