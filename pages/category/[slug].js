import { useRouter } from 'next/router'
import React from 'react'
import { VscInfo } from 'react-icons/vsc'
import { PostCard, PostWidget, Categories, Loader } from '../../components'
import { getCategoryPosts, getCategories } from '../../services/index'

function CategoryPost({ posts }) {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto mb-8 px-1 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8 grid grid-cols-1 gap-8">
          {posts.length === 0 && (
            <div className="text-white text-4xl font-bold uppercase flex gap-x-1">
              <VscInfo /> NO POST !
            </div>
          )}
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 space-y-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default CategoryPost

export async function getServerSideProps({ query: { slug } }) {
  console.log(slug)
  const posts = await getCategoryPosts(slug)
  return {
    props: { posts },
  }
}
// export async function getStaticPaths() {
//   const categories = await getCategories()
//   return {
//     paths: categories.map(({ slug }) => ({ params: { slug } })),
//     fallback: true,
//   }
// }
