import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [prefetchedViaRouter, setPrefetchedViaRouter] = useState(false)
  const router = useRouter()

  const prefetchViaRouter = () => {
    router.prefetch('/prefetched-via-router')
    setPrefetchedViaRouter(true)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href='/prefetched-on-viewport'>This route will be prefetched automatically.</Link>
        <button disabled onClick={prefetchViaRouter}>Click this to prefetch <code>/prefetched-via-router</code> without navigating to it.</button>
        {prefetchedViaRouter && <Link href='/prefetched-via-router' prefetch={false}>This route will be prefetched when you click this link.</Link>}
      </main>
    </>
  )
}
