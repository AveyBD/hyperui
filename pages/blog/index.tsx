import type { NextPage } from 'next'

import Banner from '../../components/content/banner'

import { getAllPosts } from '../../lib/posts'
import { Post } from '../../interface/post'
import Card from '../../components/blog/card'
import Head from 'next/head'

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'slug', 'date', 'emoji'])

  return {
    props: { posts },
  }
}

type Props = {
  posts: Array<Post>
}

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | Free Open Source Tailwind CSS Components | HyperUI</title>

        <meta
          content="Read the HyperUI blog for tips and tricks on using Tailwind CSS in your projects."
          key="description"
          name="description"
        />
      </Head>

      <Banner
        title="HyperUI Blog"
        subtitle="Learn Tailwind CSS Tips and Tricks"
      />

      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blogs