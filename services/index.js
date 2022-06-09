import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            categories {
              name
              slug
            }
            createdAt
            excerpt
            featuredImage {
              url
            }
            title
            slug
          }
        }
      }
    }
  `
  const result = (await request(graphqlAPI, query)) || []
  return result.postsConnection.edges
}

export const getPostDetail = async (slug) => {
  const query = gql`
    query GetPostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        createdAt
        excerpt
        featuredImage {
          url
        }
        title
        slug
        content {
          raw
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { categories, slug })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories(orderBy: name_ASC) {
        name
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories
}

export const submitComment = async (commentObj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(commentObj),
  })

  return result.json()
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        comment
        createdAt
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.comments
}
export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.postsConnection.edges
}
