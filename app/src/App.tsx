import React, { Suspense } from "react";
import { RootRoutes } from "./pages/RootRoutes";
import { GlobalStyles } from "./utils/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme"

const App = () => {
  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootRoutes />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
