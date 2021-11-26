import axios from "axios";
import { Dispatch } from "redux";
import { ActionConstants } from "../action-constants/constants";
import { RepositoryActions } from "../actions/repositoryActions";

export const searchRepositories = (lib: string) => {
  return async (dispatch: Dispatch<RepositoryActions>) => {
    dispatch({
      type: ActionConstants.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: lib,
          },
        }
      );

      const packageNames = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionConstants.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageNames,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionConstants.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
