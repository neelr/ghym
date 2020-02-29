import React from "react";
import { ThemeProvider, useColorMode } from "theme-ui";
import theme from "../components/theme"
import {Flex, Link, Box, Button} from "rebass"
import Nav from "../components/Nav"


export default ({ Component, pageProps }) => {
    return (
    <ThemeProvider theme={theme}>
        <Nav/>
        <Component {...pageProps}/>
    </ThemeProvider>
)};
