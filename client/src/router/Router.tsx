import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
