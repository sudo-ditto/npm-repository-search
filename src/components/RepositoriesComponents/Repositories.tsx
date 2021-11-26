import React from "react";
import RepositoriesInput from "./RepositoriesInput";
import RepositoriesList from "./RepositoriesList";
import classes from "./Repositories.module.css";

const Repositories: React.FC = () => {
  return (
    <section className={classes.Output}>
      <RepositoriesInput />
      <RepositoriesList />
    </section>
  );
};

export default Repositories;
