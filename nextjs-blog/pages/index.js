import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingmd}>
        <p>Hello! I'm Daily. I am a first year software development student. You can contact me on daily@taimapp.ee Let's talk about Nextjs course:)</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
        <section className={`${utilStyles.headingmd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headinglg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title}) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br/>
                        {id}
                        <br/>
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    </Layout>
  )
}