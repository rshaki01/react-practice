import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';



const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={console.log('script laoded correctly, window.FB has been popualated')}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </Layout>
  )
}

export default firstPost
