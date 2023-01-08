import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link, graphql, PageProps  } from "gatsby"
import Layout from '../../components/layout'
import Seo from "../../components/seo"
import {Fragment} from "react";

type DataProps = {
  allMdx: {
    nodes: any
  }
}


const BlogPage = ({data: { allMdx }}: PageProps<DataProps>) => {
  return (
    <Layout path="blog">
      {
        allMdx.nodes.map((node: any) => (
            <Fragment>
              <article key={node.id}>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
                <p>📅{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
              <hr />
            </Fragment>
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
