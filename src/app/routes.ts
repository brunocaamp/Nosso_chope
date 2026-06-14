import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { gridBase } from "./components/code/constants";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "contato", Component: ContactPage },
    ],
  },
]);
