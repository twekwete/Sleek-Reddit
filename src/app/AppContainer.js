import React from "react";

export default function AppContainer({ children }) {
  return <div className="min-h-screen min-w-full sm:p-4 flex flex-col gap-4">{children}</div>;
}