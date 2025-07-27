import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./Components/Watch";
import MainContainer from "./Components/MainContainer";
import VideoContainer from "./Components/VideoContainer";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
