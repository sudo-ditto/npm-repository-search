import { Provider } from "react-redux";
import { store } from "../store";
import Repositories from "../components/RepositoriesComponents/Repositories";
import classes from "./App.module.css";
function App() {
  return (
    <Provider store={store}>
      <main className={classes.main}>
        <h1>Search for an npm package</h1>
        <Repositories />
      </main>
    </Provider>
  );
}

export default App;
