import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import store from "./utils/store";
import MainContainer from "./Components/MainContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
