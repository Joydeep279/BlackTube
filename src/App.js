import "./App.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./Components/Watch";
import MainContainer from "./Components/MainContainer";
import VideoContainer from "./Components/VideoContainer";
import Search from "./Components/Search";
import { Provider } from 'react-redux';
import NotFound from './Components/NotFound';

const appRoute = createBrowserRouter([
  {
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
        path: "/results",
        element: <Search />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
