import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { gridBase } from "./components/code/constants";
import { ParallaxProvider } from "react-scroll-parallax";
import { Preloader } from "./components/animations/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    document.body.classList.add('preloader-done');
    window.dispatchEvent(new Event('preloaderComplete'));
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </>
  );
}
