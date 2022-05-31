import { AppProps } from "next/dist/shared/lib/router/router";
import {
  extendTheme,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/react";
import { wrapper } from '../store';


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
const MyApp = ({ Component: Page, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      
      <CSSReset />
      {/* @ts-ignore: Unreachable code error */}
      <Page {...pageProps} />
      
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
