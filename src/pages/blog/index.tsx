import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link, graphql, PageProps  } from "gatsby"
import Layout from '../../components/layout'
import Seo from "../../components/seo"

type DataProps = {
  allMdx: {
    nodes: any
  }
}


const BlogPage = ({data: { allMdx }}: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY MMMM D")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => <Seo pageTitle="My Blog Posts" />

export default BlogPage