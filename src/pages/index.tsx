import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout path="index">
      <p>Welcome to my world!</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo pageTitle="Home Page" />
