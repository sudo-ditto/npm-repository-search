import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { repositoryActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repositoryActionCreators, dispatch);
};
