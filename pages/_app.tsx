import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "redux/store";
import { lightTheme } from "constants/theme";

import "styles/globals.css";
import "styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
