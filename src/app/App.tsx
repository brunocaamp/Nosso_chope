import { RouterProvider } from "react-router";
import { router } from "./routes";
import { gridBase } from "./components/code/constants";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}
