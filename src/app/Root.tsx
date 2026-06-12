import { Outlet, ScrollRestoration } from "react-router";

export function Root() {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
        <div className="w-full max-w-[1920px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
