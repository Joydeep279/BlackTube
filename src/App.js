import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./Components/Watch";
import MainContainer from "./Components/MainContainer";
import VideoContainer from "./Components/VideoContainer";
import HookDemo from "./Components/HookDemo";
import Search from "./Components/Search";
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
      {
        path: "/hook",
        element: <HookDemo />,
      },
      {
        path:"/results",
        element:<Search/>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRoute}/>
      </div>
    </Provider>
  );
}

export default App;
