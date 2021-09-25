import type { AppProps } from 'next/app';
import { AppProvider } from '../hooks';
import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AppProvider>
  );
}
export default MyApp;
