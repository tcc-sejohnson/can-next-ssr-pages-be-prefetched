import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      prefetchedAt: new Date().toISOString(),
    }
  }
}

export default function PrefetchedOnViewport(props: { prefetchedAt: string }) {
  return (
    <>
      <Head>
        <title>Prefetched on viewport</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <p>
            This page was prefetched at {props.prefetchedAt}.{' '}
            <Link href="/">
              <a>Go back home</a>
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}