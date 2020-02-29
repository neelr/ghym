import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../components/theme"

export default ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
    </ThemeProvider>
);
