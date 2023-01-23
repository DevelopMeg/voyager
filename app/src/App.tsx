import React, { Suspense } from "react";
import { RootRoutes } from "./pages/RootRoutes";

const App = () => {
  return (
    <Suspense>
      <RootRoutes />
    </Suspense>
  );
};

export default App;
