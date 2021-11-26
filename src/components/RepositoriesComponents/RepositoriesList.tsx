import React from "react";
import { useSelector } from "../../hooks/useTypedSelector";
import classes from "./RepositoriesList.module.css";

const RepositoriesList: React.FC = () => {
  const { data, error, loading } = useSelector((state) => state.repositories);

  return (
    <div className={classes.repoList}>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((repository, key) => (
            <li key={key}>{repository}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
