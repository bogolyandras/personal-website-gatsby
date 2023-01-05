import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

type DataProps = {
  data: {
    mdx: {
      frontmatter: any
    }
  }
  children: React.ReactNode
}

const BlogPost = ({ data, children }: DataProps) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo pageTitle='Super Cool Blog Posts' />

export default BlogPost