import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


const firstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <h1>First Post</h1>
      <Link href="/">Back Home</Link>
    </div>
  )
}

export default firstPost
