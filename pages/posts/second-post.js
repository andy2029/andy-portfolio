import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>I am a student</h1>
      <img src="https://www.dumpaday.com/wp-content/uploads/2018/04/1-26.jpg"></img>
      <h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}