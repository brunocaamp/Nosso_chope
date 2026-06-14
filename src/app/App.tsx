import { RouterProvider } from "react-router";
import { router } from "./routes";
import { gridBase } from "./components/code/constants";

export default function App() {
  return <RouterProvider router={router} />;
}
