import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          key="favicon"
        />
      </Head>
      <body>
        <script id="FF_FOUC_FIX" type="text/javascript">
          {`let FF_FOUC_FIX;/*Firefox FOUC fix*/`}
        </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
