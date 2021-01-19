import ShoesContainer from "./components/ShoesContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import JacketComponent from "./components/JacketComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoesContainer />
        <JacketComponent />
      </div>
    </Provider>
  );
}

export default App;
