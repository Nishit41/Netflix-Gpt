import { Provider } from "react-redux";
import { Body } from "./component/Body";
import "./index.css";
import appStore from "./component/utills.js/appStore";
function App() {
  return (
    <Provider store={appStore}>
    <div>
      <Body/>       
    </div>
    </Provider>
  );
}

export default App;
