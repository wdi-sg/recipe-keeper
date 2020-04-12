import React from 'react'

import {
  Document,
  Head,
  Main,
} from '@react-ssr/express'

export default class extends Document {

  render () {
    return (
      <html lang="en">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>KNN's Recipe Keeper App</title>
      </Head>
      <body>
      <Main/>
      </body>
      </html>
    )
  }
}