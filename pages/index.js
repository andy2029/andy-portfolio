import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>These are my favourite games</div>
        <div><a href="https://warframe.fandom.com/wiki/">Warframe</a>
        </div>
        <div>
        <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">Stardew</a>
        </div>
      <br />

        <div>
        Read <Link href="/posts/first-post"><a>my first post!</a></Link>
        </div>
        <div>
        Read <Link href="/posts/second-post"><a>my second post!</a></Link>
        </div>
        <p>
          (Made using{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        
      </section>
    </Layout>
  )
}