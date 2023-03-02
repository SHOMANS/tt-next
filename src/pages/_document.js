import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='A simple project starter to work with TypeScript, React, NextJS, Jest and ESLint.' />
        <meta name='author' content='Rafael Ribeiro' />
        <meta name='keywords' content='typescript,react,nextjs,jest,eslint,starter,template' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <body>
        {/* <p>Hello From document</p> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
