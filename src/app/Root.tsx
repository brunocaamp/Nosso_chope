import { Outlet, ScrollRestoration } from "react-router";
import { gridBase } from "./components/code/constants";

export function Root() {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
        <div className="w-full max-w-[120rem]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
