import React from 'react'
import { useRouter } from 'next/router'
import { getPostDetail, getPosts } from '../../services'
import {
  PostWidget,
  Categories,
  PostDetail,
  Loader,
  Author,
  CommentForm,
  Comments,
} from '../../components'

function PostDetails({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto mb-8 px-1 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4 space-y-8">
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetail(params.slug)
  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
