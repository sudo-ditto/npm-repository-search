import { ActionConstants } from "../action-constants/constants";
import { RepositoryActions } from "../actions/repositoryActions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: Array<string>;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: RepositoryActions
): RepositoriesState => {
  // Type Guards also work for switch cases
  switch (action.type) {
    case ActionConstants.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionConstants.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionConstants.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
