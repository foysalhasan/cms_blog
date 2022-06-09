import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="container px-1 lg:px-10 mx-auto pb-8">
      <Head>
        <title>CMS BLOG</title>
        <meta name="keywords" content="next js, cms blog, seo" />
        <meta name="description" content="A next js cms blog" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
        <div className="lg:col-span-8 col-span-1 grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="relative lg:sticky top-8 space-y-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
