import { MEDUSA_BACKEND_URL } from "@lib/config"
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    const uri = MEDUSA_BACKEND_URL
    const { hostname } = new URL(uri)

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href={`//${hostname}`} crossOrigin="true" />
          <link rel="dns-prefetch" href={`//${hostname}`} />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          /> */}
          {/* <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
          </style> */}
          {/* <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
          </style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
