import '@/styles/style.css';
import '@/styles/extra-styles.css';
import '@/styles/theme.css';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
