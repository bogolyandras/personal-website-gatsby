import * as React from "react"
import {graphql, Link} from 'gatsby'
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
    <Layout path="sub-blog">
      <Link to="/blog/">&lt; Go Back</Link>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>📅{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM D")
      }
    }
  }
`

export const Head = ({ data }: DataProps) => <Seo pageTitle={data.mdx.frontmatter.title + ' | Blog'} />

export default BlogPost
