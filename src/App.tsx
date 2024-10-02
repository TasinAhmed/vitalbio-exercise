import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import TestResults from "./components/TestResults";
import Chart from "./components/Chart";
import Timer from "./components/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestResults />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
  { path: "/timer", element: <Timer /> },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};
export default App;
