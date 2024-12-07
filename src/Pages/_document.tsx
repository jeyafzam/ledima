import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
 
    const isRTL = true; 

    return (
      <Html lang={isRTL ? 'fa' : 'en'} dir={isRTL ? 'rtl' : 'ltr'}>
        <Head>
          <link rel="stylesheet" href="https://example.com/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
