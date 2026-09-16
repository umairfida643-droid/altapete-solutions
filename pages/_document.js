import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.bunny.net/css?family=noto-sans:400,500,700,800" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
