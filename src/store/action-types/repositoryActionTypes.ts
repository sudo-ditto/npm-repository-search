import { ActionConstants } from "../constants/actionConstants";

interface SearchRepositoriesAction {
  type: ActionConstants.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionConstants.SEARCH_REPOSITORIES_SUCCESS;
  payload: Array<string>;
}

interface SearchRepositoriesErrorAction {
  type: ActionConstants.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type RepositoryActions =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
