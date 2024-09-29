import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/home";
import HappyBirthDay from "./page/HappyBirthDay/HappyBirthDay";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <></>,
    },
    {
      path: "contact",
      element: <></>,
    },
    {
      path: "hpbd",
      element: <HappyBirthDay />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
