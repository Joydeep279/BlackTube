import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SideBar />
      </div>
    </Provider>
  );
}

export default App;
