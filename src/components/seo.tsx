import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type DataProps = {
pageTitle: string
}

const Seo = ({ pageTitle }: DataProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo