import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.bunny.net/css?family=noto-sans:400,500,700,800" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('altapete_theme');
                  var theme = saved;
                  if (!theme || (theme !== 'dark' && theme !== 'light')) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
