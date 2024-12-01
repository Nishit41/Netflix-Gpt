import { Provider } from "react-redux";
import { Body } from "./component/Body";
import "./index.css";
import appStore from "./component/utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
