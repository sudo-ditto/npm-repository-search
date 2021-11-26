import React from "react";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import classes from "./RepositoriesInput.module.css";

const RepositoriesInput: React.FC = () => {
  const [lib, setLib] = useState("");
  const { searchRepositories } = useActions();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLib(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dispatch
    searchRepositories(lib);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.field}>
        <label htmlFor="search">Which npm package are you looking for?</label>
        <input
          type="text"
          id="search"
          value={lib}
          onChange={inputChangeHandler}
        />
      </div>
      <button>Search</button>
    </form>
  );
};

export default RepositoriesInput;
