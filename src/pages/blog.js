import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          localFile {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
