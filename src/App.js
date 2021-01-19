import ShoesContainer from "./components/ShoesContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

import JacketContainer from "./components/JacketContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoesContainer />
        <JacketContainer />
      </div>
    </Provider>
  );
}

export default App;
