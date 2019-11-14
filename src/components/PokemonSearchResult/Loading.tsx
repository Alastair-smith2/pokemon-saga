import React from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../ducks/ui";

const LoadingStatus: React.FC = (): JSX.Element | null => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h2>An error occured, did you spell the pokemon's name right?</h2>;
  }
  return null;
};

export default LoadingStatus;
