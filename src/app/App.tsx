import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { gridBase } from "./components/code/constants";
import { ParallaxProvider } from "react-scroll-parallax";
import { Preloader } from "./components/animations/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </>
  );
}
